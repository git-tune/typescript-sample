// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 1,
  READ_ONLY,
  AUTHOR = '書き込み',
}

const userA = {
  id: 0,
  name: 'tune',
  type: Role.ADMIN,
};

const userB = {
  id: 1,
  name: 'tuna',
  type: Role.AUTHOR,
};

console.log(userA.type);
console.log(userB.type);

console.log(Role[userA.type]);

namespace Role {
  export function toMessegeKey(role: Role) {
    switch (role) {
      case Role.ADMIN:
        return '管理者ユーザーです';
      case Role.AUTHOR:
        return '書き込み専用です';
    }
  }
}

console.log(Role.toMessegeKey(userA.type));
