# social-media-app
🎯 Please mention the requirements you met and which goals you achieved for this assignment.
I met the requirements of using clerk to sign in, up and out. And also implementing a Radix UI primitive.

🎯 Were there any requirements or goals that you were not quite able to achieve?
I really struggled with being able to create a post and linking my database. I was able to do this when we used seed.js back on the client and server assignments we did. I have not been able to do this since nextJS. This is also mainly due to me being stuck on one error which I will paste at the bottom of this readme file. I think the error had something to do with linking my db, I might be missing a huge chunk or just a few small bits of code, if I could look over this with a TA and get it fixed I would be very appreciative because I just couldn't get it fixed.

🎯 If so, could you please tell us what was it that you found difficult about these tasks?
I just feel as though there are holes in my knowledge still. I feel much more confident than the last two weeks however I still clearly have lots of learning to do on the subject of nextJS. I have definitely progressed but not enough so like I said above, I would love to just go over that with a TA at some point if possible and fix my errors to then have a more complete submission.


Unhandled Runtime Error
Error: SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing

Source
src/app/layout.js (16:20) @ async RootLayout

  14 |   const { userId } = auth();
  15 |
> 16 |   const profiles = await db.query(
     |                    ^
  17 |     `SELECT * FROM profiles WHERE clerk_id = '${userId}`
  18 |   );
  19 |
