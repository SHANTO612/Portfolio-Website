#!/usr/bin/env node
import connectToDb from '../src/database/index.js';
import User from '../src/models/User.js';

const [, , username, newPassword] = process.argv;

if (!username || !newPassword) {
  console.error('Usage: node scripts/reset-admin-password.mjs <username> <newPassword>');
  process.exit(1);
}

(async () => {
  try {
    await connectToDb();
    const updated = await User.findOneAndUpdate(
      { username },
      { $set: { password: newPassword } },
      { upsert: true, new: true }
    );
    console.log('User updated/created successfully:', updated);
    process.exit(0);
  } catch (e) {
    console.error('Failed to update user:', e);
    process.exit(1);
  }
})();
