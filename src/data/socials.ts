import { ReactNode } from "react"
import { IconType } from "react-icons"
import { RiGithubFill, RiInstagramLine, RiLinkedinFill, RiTwitterFill } from "react-icons/ri"

const socials: {
    name: string,
    url: string,
    icon: IconType
}[] = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/max-taylor-761512196/",
        icon: RiLinkedinFill
    }
]

export default socials