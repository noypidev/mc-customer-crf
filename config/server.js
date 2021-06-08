module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 5050),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a2739e4e52223767ec90a41198da4335'),
    },
  },
});
