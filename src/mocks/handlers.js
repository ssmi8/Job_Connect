import { rest } from "msw"

const baseURL = "https://connect-api-ss.herokuapp.com/"

export const handlers = [
    // mocks a request to get the logged in user
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                pk: 2,
                username: "steve",
                email: "",
                first_name: "",
                last_name: "",
                profile_id: 2,
                profile_image: 
                    "https://res.cloudinary.com/deqj8dkeq/image/upload/v1/media/images/steve_profile_haaypj"
            })
        );
    }),
    // mocks a request to log a user out
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];