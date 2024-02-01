interface Props {
    title: string
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
  }
export default function PageLayout({children, title}: Props) {
    return (
        <>
        {"<!DOCTYPE html>"}
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title} | Elysia web 1.0 app!</title>
        </head>
        <body>
            {children}
        </body>
        </html>
        </>
    )
}