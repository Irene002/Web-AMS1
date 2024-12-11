import bcrypt from 'bcryptjs';

export const hashPassword = async (password) => {
    try {
        const saltRounds = 10;  // Menentukan tingkat keamanan hashing
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (err) {
        console.error('Error hashing password:', err);
        throw new Error('Error hashing password');
    }
};

// Fungsi untuk memverifikasi password
export const verifyPassword = async (inputPassword, storedPassword) => {
    try {
        return await bcrypt.compare(inputPassword, storedPassword);
    } catch (err) {
        console.error('Error verifying password:', err);
        throw new Error('Error verifying password');
    }
};
