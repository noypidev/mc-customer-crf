module.exports = ({ env }) => ({
   upload: {
      provider: 'cloudinary',
      providerOptions: {
         cloud_name: env('CLOUDINARY_NAME', 'djkzcwdvg'),
         api_key: env('CLOUDINARY_KEY', '978362226944714'),
         api_secret: env('CLOUDINARY_SECRET', '5eMINU6elflQK3ARn7VquRnUXhM'),
      },
      actionOptions: {
         upload: {},
         delete: {},
      },
   },
});