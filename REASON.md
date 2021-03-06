## Reasons a developer can be denied access
When transitioning to the denied route, there are several reasons a developer can be denied
and those reasons are reflected in the single query param in the url.

| Reason   | Explanation   |
|:-:|---|
| 1  |This means the developer's account was less than six months old.  |
| 2  |This means the developer has less than 2 repositories tied to their account.   |
| 3  |This means the developer has contributed to fewer than 2 public repositories in the last six months. Contribution to public repositories means they must have made a PR and that PR is tied to the GitHub account they are signing up with.  |
| 4  |This means the developer already has an account and cannot receive another testing token tied to their username  |
| 5  |This means the username provided does not exist on the backend db. The developer must sign up using their GitHub credentials  |
| 6  |This means the user tried to access the denied page with a reason parameter.  |
| 7  |This means something failed when posting. See handlers/github-api-handlers.js for an example of reason = 7  |
| 8  |The github api failed |
| 9  |The session expired or the session's username did not exist at the time of the requests  |
| 0  |Something has gone wrong on the backend. View `/app/routes/contract.js' for an example of reason = 0  |

## Sample url with the reason attached
```
http://localhost:3000/#/auth/denied?reason=5
```
