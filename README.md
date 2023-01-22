# Messagyo-backend

`POST /room`

Request Data: 
```json
{
    "name": string,
    "roomType": string<"private" | "group">,
    "participants": string[] //participants usernames
}
```