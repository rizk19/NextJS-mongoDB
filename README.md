<h1 align="center">Next.js 🔥 MongoDB</h1>

<h5>Modified by Rizki A Faris</h5>
<h6>Starter Credit to Huang Vo (https://dev.to/hoangvvo).</h6>
<div align="center">

An [**Next.js**](https://github.com/zeit/next.js/) and [**MongoDB**](https://www.mongodb.com/) web application, designed with simplicity for learning and real-world applicability in mind.

:rocket: [Check out the demo from Huang Vo](https://nextjs-mongodb.vercel.app/) :rocket:

</div>

<h2 align="center">Features</h2>

<div align="center">

💨 Fast and light without [bulky](https://bundlephobia.com/result?p=express@4.17.1), [slow](https://github.com/fastify/benchmarks#benchmarks) Express.js.

✨ Full [API Routes](https://nextjs.org/blog/next-9#api-routes) implementation and Serverless ready

🤠 Good ol' Middleware pattern, compatible with Express ecosystem, powered by [next-connect](https://github.com/hoangvvo/next-connect)

📙 Can be adapted to any databases besides MongoDB (Just update [api-lib/db](api-lib/db))

</div>

<h3 align="center">:lock: Authentication and Account</h3>

<div align="center">

- [x] Session-based authentication ([Passport.js](https://github.com/jaredhanson/passport))
- [x] Sign up/Log in/Sign out API
- [x] Authentication via email/password
- [x] Email verification using Mailjet
- [x] Password change
- [x] Password reset via email using Mailjet
- [x] Save avatar photos using MongoDB GridFS

</div>

<h3 align="center">:woman::man: Profile</h3>

<div align="center">

- [x] Profile picture, username, name, bio, email
- [x] Update user profile

</div>

<h3 align="center">:eyes: Social</h3>

<div align="center">

- [x] View others' profiles
- [x] Posts and comments

</div>

<h2 align="center">Guide</h2>

This project accompanies the following posts:

- [User authentication (using Passport.js)](https://hoangvvo.com/blog/next-js-and-mongodb-app-1)
- [User profile and Profile Picture](https://hoangvvo.com/blog/next-js-and-mongodb-app-2)
- [Email Verification, Password Reset/Changee](https://hoangvvo.com/blog/next-js-and-mongodb-app-3)
- [Posts and comments](https://hoangvvo.com/blog/next-js-and-mongodb-app-4)


Although the project is written to be secure, its simplicity requires careful considerations for usage in sensitive productions. [File an issue](https://github.com/hoangvvo/nextjs-mongodb-app/issues/new/choose) if you spot any security problems.

<h3 align="center">Dependencies</h3>

This project uses the following dependencies:

- `next.js` - v9.3 or above required for **API Routes** and new [**new data fetching method**](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering).
- `react` - v16.8 or above required for **react hooks**.
- `react-dom` - v16.8 or above.
- `swr` - required for state management, may be replaced with `react-query`
- `mongodb` - may be replaced by `mongoose`.
- `passport`, `passport-local` - required for authentication.
- `next-connect` - recommended if you want to use Express/Connect middleware and easier method routing.
- `next-session`, `connect-mongo` - required for session, may be replaced with other session libraries such as `cookie-session`, `next-iron-session`, or `express-session` (`express-session` is observed not to work properly on Next.js 11+).
- `bcryptjs` - optional, may be replaced with any password-hashing library. `argon2` recommended.
- `validator` - optional but recommended, to validate email.
- `ajv` - optional but recommended, to validate request body.
- `multer` - may be replaced with any middleware that handles `multipart/form-data`
- `multer-gridfs-storage` - finding way to store a files/image to mongodb using [GridFS](https://www.npmjs.com/package/multer-gridfs-storage) for image upload or files and make it a chunk tables in your database. Not observe about performance, but i just try to avoid using any external resource for images.
- several other optional dependencies for cosmetic purposes.
- `node-mailjet` - optional, **only if** you use it for email. It is recommended to use 3rd party services like [Mailjet](https://www.mailjet.com/) it's free for around 6,000 emails/month, [node-mailjet](https://www.npmjs.com/package/node-mailjet).

<h3 align="center">Environmental variables</h3>

Environmental variables in this project include:

- `MONGODB_URI` The MongoDB Connection String (with credentials and database name)
- `WEB_URI` The _URL_ of your web app.
- `MONGO_IMG_BUCKET` The bucket name for your collection of photos/image eg. `photos` and you will have collection photos.files and photos.chunks.
- `MONGO_PDF_BUCKET` The bucket name for your collection of pdf, but not yet implemented. eg. `pdf` and you will have collection pdf.files and pdf.chunks.
- `MAILJET_KEY` (optional, Mailjet **only**) Mailjet environment variable for key. See [this](https://app.mailjet.com/account/apikeys) **carefull** you only have one opportunity to access your key and secret or you need to reset it for a new one.
- `MAILJET_SECRET` (optional, Mailjet **only**) Mailjet environment variable for secret. See [this](https://app.mailjet.com/account/apikeys) idem with the MAILJET_KEY.
- `MAILJET_SENDER_MAIL` (optional, but you need to add sender before use it [this](https://app.mailjet.com/account/sender)).

<h3 align="center">Development</h3>

Start the development server by running `yarn dev` or `npm run dev`. Getting started by create a `.env.local` file with the above variables. See [Environment Variables](https://nextjs.org/docs/basic-features/environment-variables).

<h2 align="center">Deployment</h2>

This project can be deployed [anywhere Next.js can be deployed](https://nextjs.org/docs/deployment). Make sure to set the environment variables using the options provided by your cloud/hosting providers.

After building using `npm run build`, simply start the server using `npm run start`.

You can also deploy this with serverless providers given the correct setup.

<h2 align="center">Contributing</h2>

<div align="center">
  i'm not yet open for this, but if you need just reach me through email.
</div>

<h2 align="center">
  License
</h2>

<div align="center">
  
  [MIT](LICENSE)
  
</div>
