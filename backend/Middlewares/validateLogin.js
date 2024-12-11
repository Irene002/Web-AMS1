
export const validateLoginInput = (req, res, next) => {
    const { username, password } = req.body;


    if (!username || !password) {
        return res.status(400).json({ msg: 'Username and password are required' });
    }

    next();
};
