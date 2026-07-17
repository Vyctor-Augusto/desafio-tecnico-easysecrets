export function createTestUser(browserName: string) {
  return {
    username: `vyctor_${browserName}_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
    password: 'Senha123'
  };
}

export const product = {
  name: 'Samsung galaxy s6'
};