// mongoose library import kar rahe hain jo MongoDB ke sath kaam karti hai
// Document → MongoDB ka ek record (row)
// Schema → data ka structure define karta hai
// Model → database ke CRUD operations ke liye use hota hai
import mongoose, { Document, Schema, Model } from "mongoose";

/**
 * IUser Interface
 * Ye TypeScript ke liye hai (compile time safety)
 * MongoDB ke document ka structure batata hai
 */
export interface IUser extends Document {
  // User ka naam (optional)
  name?: {
    // First name (optional)
    first?: string;

    // Last name (optional)
    last?: string;
  };

  // User ka email (optional kyunki phone login bhi ho sakta hai)
  email?: string;

  // User ka phone number (optional kyunki email login bhi ho sakta hai)
  phone?: string;

  // Password sirf email login ke liye
  password?: string;

  // Email verify hua ya nahi
  isEmailVerified: boolean;

  // Phone verify hua ya nahi (OTP based)
  isPhoneVerified: boolean;

  // Login kis type se hua hai
  // Sirf EMAIL ya PHONE allow hoga
  loginType?: "EMAIL" | "PHONE";

  // User ka role (authorization ke liye)
  role: "USER" | "ADMIN";

  // Document kab create hua
  createdAt: Date;

  // Document last time kab update hua
  updatedAt: Date;
}

/**
 * User Schema
 * Ye MongoDB ke liye hota hai (runtime validation)
 */
const userSchema = new Schema<IUser>(
  {
    // Name ek nested object hai
    name: {
      // First name string type ka
      first: {
        type: String,
      },

      // Last name string type ka
      last: {
        type: String,
      },
    },

    // Email field
    email: {
      type: String, // email string format me hoga

      lowercase: true, // email ko automatically lowercase kar dega

      unique: true, // same email dobara allow nahi hogi

      sparse: true, // email optional hai (multiple null allowed)
    },

    // Phone number field
    phone: {
      type: String, // phone string me store hoga

      unique: true, // same phone number dobara allow nahi

      sparse: true, // phone optional hai
    },

    // Password field
    password: {
      type: String, // hashed password store hoga
    },

    // Email verification status
    isEmailVerified: {
      type: Boolean, // true ya false

      default: false, // by default false rahega
    },

    // Phone verification status
    isPhoneVerified: {
      type: Boolean, // true ya false

      default: false, // by default false rahega
    },

    // Login type field
    loginType: {
      type: String, // string type

      enum: ["EMAIL", "PHONE"], // sirf ye 2 values allow hongi
    },

    // Role field
    role: {
      type: String, // role string hoga

      enum: ["USER", "ADMIN"], // sirf USER ya ADMIN allowed

      default: "USER", // default role USER rahega
    },
  },
  {
    // timestamps true karne se MongoDB automatically ye add karega:
    // createdAt → kab document bana
    // updatedAt → kab last update hua
    timestamps: true,
  }
);

/**
 * User Model
 * Ye schema ko MongoDB collection me convert karta hai
 * Aur CRUD operations allow karta hai
 */
const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

// Model ko export kar rahe hain taaki controllers me use kar sake
export default User;
