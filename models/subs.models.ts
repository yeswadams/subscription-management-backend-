import mongoose, { Document, Schema, Types } from "mongoose";

// 1. Fixed: Added 'user' to the interface so the Schema accepts it
interface ISubscription extends Document {
  name: string;
  price: number;
  currency: 'USD' | 'EUR' | 'GBP';
  frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  category: 'sports' | 'news' | 'entertainment' | 'lifestyle' | 'technology' | 'finance';
  paymentMethod: 'card' | 'paypal' | 'crypto';
  status: 'active' | 'cancelled' | 'expired';
  startDate: Date;
  renewalDate: Date;
  user: Types.ObjectId; // Added here
}

const subSchema = new Schema<ISubscription>({
  name: {
    type: String,
    required: [true, 'Subscription name is required'],
    trim: true,
    minLength: 2,
    maxLength: 100,
  },
  price: {
    type: Number,
    required: [true, 'Subscription price is required'],
    min: [0, "Price must be greater than 0"]
  },
  currency: {
    type: String,
    enum: ['USD', 'EUR', 'GBP'],
    default: 'USD'
  },
  frequency: {
    type: String,
    enum: ['daily', 'weekly', 'monthly', 'yearly']
  },
  category: {
    type: String,
    enum: ["sports", "news", "entertainment", "lifestyle", "technology", "finance"],
    required: [true, 'Subscription category is required']
  },
  paymentMethod: {
    type: String,
    enum: ['card', 'paypal', 'crypto'],
    required: [true, 'Subscription payment method is required'],
    trim: true
  },
  status: {
    type: String,
    enum: ['active', 'cancelled', 'expired'],
    default: 'active'
  },
  startDate: {
    type: Date,
    required: [true, 'Subscription start date is required'],
    validate: {
      validator: function(value: Date) {
        return value <= new Date();
      },
      message: "Start date must be in the past or present"
    }
  },
  renewalDate: {
    type: Date,
    required: [true, 'Subscription renewal date is required'], // Fixed typo error message
    validate: {
      // Fixed: Typed 'this' to support both Document contexts and Query contexts safely
      validator: function(
        this: mongoose.HydratedDocument<ISubscription> | mongoose.Query<unknown, unknown>, 
        value: Date
      ): boolean {
        // Type guard: Check if 'this' is a Document instance
        if (this && 'startDate' in this) {
          return value > this.startDate;
        }
        
        // Handle Query validation context (e.g., findOneAndUpdate)
        if (this instanceof mongoose.Query) {
          const update = this.getUpdate() as Record<string, any> | null;
          const incomingStartDate = update?.startDate || update?.$set?.startDate;
          if (incomingStartDate) {
            return value > new Date(incomingStartDate);
          }
        }
        
        return true;
      },
      message: "Renewal date must be after the start date"
    }
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Subscription user is required'],
    index: true
  }
}, { timestamps: true });

// Fixed: Removed the generic from .pre() and typed 'this' inside the function arguments instead
subSchema.pre('save', function(this: mongoose.HydratedDocument<ISubscription>, next) {
  if (!this.renewalDate) {
    const renewalPeriods: Record<'daily' | 'weekly' | 'monthly' | 'yearly', number> = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365
    };

    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
  }

  if (this.renewalDate < new Date()) {
    this.status = 'expired';
  }
  next;
});


export default mongoose.model<ISubscription>('Subscription', subSchema);
