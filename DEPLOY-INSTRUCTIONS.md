# Launching Sage Reads

Sage Reads gets its own GitHub repository and its own Netlify site, so it has
its own database and its own learner logins, separate from MathIT.

These are the same steps MathIT's own setup notes describe. I could not run the
Netlify or GitHub steps myself, so if anything on screen does not match what is
written here, stop and tell me what you see.

## Step 1: Make the GitHub repository

1. Sign in to GitHub and click **New repository**.
2. Name it `sage-reads`. Choose **Private** if you do not want the code to be public.
3. Leave "Add a README" unticked, so the repository starts empty.
4. Click **Create repository**.

## Step 2: Upload the files

1. Unzip `sage-reads.zip`. You get a folder called `sage-reads`.
2. On the new repository's page, click **uploading an existing file**.
3. Open the `sage-reads` folder, select **everything inside it**, and drag it
   onto the GitHub page. The folders (`src`, `netlify`, `web`, `scripts`,
   `assets`) must keep their names. GitHub keeps the folders when you drag them
   in Chrome or Edge.
4. Click **Commit changes**.

On a Mac the `.gitignore` file is hidden and may not upload. That is fine; the
site works without it.

## Step 3: Create the Netlify site

1. In Netlify, click **Add new site**, then **Import an existing project**.
2. Choose **GitHub** and pick the `sage-reads` repository.
3. Netlify reads all the build settings from `netlify.toml`, so do not change
   anything. Click **Deploy**.
4. The first deploy sets up the database and the login system by itself
   (MathIT's notes say this happens because of the packages listed in
   `package.json`). It can take a few minutes.

**Check it worked:** open `https://YOUR-SITE.netlify.app/api/health`. You
should see `"ok":true`. If you see an error, send me a screenshot of it and of
the deploy log.

## Step 4: Make yourself the admin

1. Open the site, click **Create an account**, and sign up with your email.
2. In Netlify, go to **Identity**, then **Users**, open your user, and give it the role `admin`.
3. Sign in again. You will see an **Admin** link at the top. That is where you
   approve learners, add learners and set tasks.

## Step 5: Choose who can sign up

In Netlify **Identity** settings, set registration to **Invite only** if you
want to add every learner yourself from the admin page. Learners who sign up on
their own still wait for your approval before they can use the app.

## Step 6: Your own web address (optional)

In **Domain management**, add something like `read.debbysmit.co.za`, the same
way MathIT uses `mathit.debbysmit.co.za`.

## Before you share it with families

- **Pictures:** please check that the licence for the hedgehog pictures and the
  garden background allows use in an app you give to clients.
- **Try it as a learner:** make a test learner account and go through a sound
  card and a game, so you see exactly what a child will see.

## Changing content later

Edit `src/content.js` on GitHub (words, stories, questions, heart words) and
commit. Netlify rebuilds the site by itself. Every build first checks that
every "read it myself" story only uses sounds already taught. If one does not,
the build stops and the deploy log names the word, so a mistake never reaches
the learners.
