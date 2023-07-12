const users = [{
    'id': 1,
    'username': 'admin',
    'email': 'admin@admin.com',
    'password': 'Admin123',
    'isAdmin': true,
    'score': 0,
},{
    'id': 2,
    'username': 'user1',
    'email': 'user1@user.com',
    'password': 'user1',
    'isAdmin': false,
    'score': 50,
}];

exports.find = () => {
    return users;
}

exports.findExceptAdmin = () => {
    const usersExceptAdmin = [];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (!user.isAdmin) {
            usersExceptAdmin.push(user);
        }
    }
    return usersExceptAdmin;
}


const getNewId = () => {
    if (users.length > 0) {
        return users[users.length - 1].id + 1;
    }
    return 1;
}

exports.create = (user) => {
    user.id = getNewId();
    user.isAdmin = false;
    users.push(user);
    return user;
}

exports.findByEmail = (email) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.email === email) {
            return user;
        }
    }
    return null;
}

exports.findById = (id) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === id) {
            return user;
        }
    }
    return null;
}

exports.updateById = (id, data) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === id) {
            users[i] = data;
            return users[i];
        }
    }
}

exports.deleteById = (id) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === id) {
            users.splice(i, 1);
            return;
        }
    }
}

exports.resetScoreById = (id) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === id) {
            user.score = 0;
            return;
        }
    }
}

exports.incrementScoreById = (id) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === id) {
            user.score++;
            return;
        }
    }
}

exports.decrementScoreById = (id) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === id) {
            user.score--;
            return;
        }
    }
}