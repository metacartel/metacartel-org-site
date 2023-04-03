// Library imports
import { IconProps } from "@chakra-ui/react"
// SVG imports
import Airplane from "../public/icons/airplane.svg"
import Arrow from "../public/icons/arrow.svg"
import Back from "../public/icons/back.svg"
import Bag from "../public/icons/bag.svg"
import Battery from "../public/icons/battery.svg"
import Bell from "../public/icons/bell.svg"
import Bitcoin from "../public/icons/bitcoin.svg"
import Bottle from "../public/icons/bottle.svg"
import Briefcase from "../public/icons/briefcase.svg"
import Browser from "../public/icons/browser.svg"
import Calendar from "../public/icons/calendar.svg"
import Cat from "../public/icons/cat.svg"
import Clip from "../public/icons/clip.svg"
import Cloud from "../public/icons/cloud.svg"
import Coin from "../public/icons/coin.svg"
import Crown from "../public/icons/crown.svg"
import Cup from "../public/icons/cup.svg"
import Delete from "../public/icons/delete.svg"
import Dialogue from "../public/icons/dialogue.svg"
import Dollar from "../public/icons/dollar.svg"
import Dream from "../public/icons/dream.svg"
import ExclamationPoint from "../public/icons/exclamation-point.svg"
import Facebook from "../public/icons/facebook.svg"
import Favorites from "../public/icons/favorites.svg"
import Figma from "../public/icons/figma.svg"
import File from "../public/icons/file.svg"
import Fish from "../public/icons/fish.svg"
import Flag from "../public/icons/flag.svg"
import Flashlight from "../public/icons/flashlight.svg"
import Forward from "../public/icons/forward.svg"
import Geolocation from "../public/icons/geolocation.svg"
import Goal from "../public/icons/goal.svg"
import Headphones from "../public/icons/headphones.svg"
import Heart from "../public/icons/heart.svg"
import Highlight from "../public/icons/highlight.svg"
import Home from "../public/icons/home.svg"
import Hourglass from "../public/icons/hourglass.svg"
import Info from "../public/icons/info.svg"
import Information from "../public/icons/information.svg"
import Instagram from "../public/icons/instagram.svg"
import JoiCoin from "../public/icons/joi-coin.svg"
import Joystick from "../public/icons/joystick.svg"
import Key from "../public/icons/key.svg"
import LbButton from "../public/icons/lb-button.svg"
import LeftArrow from "../public/icons/left-arrow.svg"
import LeftButtonMouse from "../public/icons/left-button-mouse.svg"
import LeftButton from "../public/icons/left-button.svg"
import LetterMail from "../public/icons/letter-mail.svg"
import Lightbulb from "../public/icons/lightbulb.svg"
import Link from "../public/icons/link.svg"
import Load from "../public/icons/load.svg"
import Lock from "../public/icons/lock.svg"
import Louder from "../public/icons/louder.svg"
import LtButton from "../public/icons/lt-button.svg"
import Map from "../public/icons/map.svg"
import Medal from "../public/icons/medal.svg"
import Melody from "../public/icons/melody.svg"
import Menu from "../public/icons/menu.svg"
import Microphone from "../public/icons/microphone.svg"
import Monitor from "../public/icons/monitor.svg"
import Moon from "../public/icons/moon.svg"
import Mountains from "../public/icons/mountains.svg"
import Nesting from "../public/icons/nesting.svg"
import Network from "../public/icons/network.svg"
import NoSound from "../public/icons/no-sound.svg"
import OpenLetter from "../public/icons/open-letter.svg"
import Pause from "../public/icons/pause.svg"
import Pedestal from "../public/icons/pedestal.svg"
import Pin from "../public/icons/pin.svg"
import Pixel from "../public/icons/pixel.svg"
import Play from "../public/icons/play.svg"
import QuestionMark from "../public/icons/question-mark.svg"
import Quiet from "../public/icons/quiet.svg"
import RbButton from "../public/icons/rb-button.svg"
import RightArrow from "../public/icons/right-arrow.svg"
import RightButtonMouse from "../public/icons/right-button-mouse.svg"
import RightButton from "../public/icons/right-button.svg"
import RtButton from "../public/icons/rt-button.svg"
import Sad from "../public/icons/sad.svg"
import Scale from "../public/icons/scale.svg"
import Scale1 from "../public/icons/scale-1.svg"
import Scale2 from "../public/icons/scale-2.svg"
import Scale3 from "../public/icons/scale-3.svg"
import Scroll from "../public/icons/scroll.svg"
import Settings from "../public/icons/settings.svg"
import Shield from "../public/icons/shield.svg"
import ShoppingCart from "../public/icons/shopping-cart.svg"
import Skull from "../public/icons/skull.svg"
import Sliders from "../public/icons/sliders.svg"
import Smile from "../public/icons/smile.svg"
import Sound from "../public/icons/sound.svg"
import Spaceship from "../public/icons/spaceship.svg"
import Star from "../public/icons/star.svg"
import Statistics from "../public/icons/statistics.svg"
import Sun from "../public/icons/sun.svg"
import Sword from "../public/icons/sword.svg"
import Target from "../public/icons/target.svg"
import Telegram from "../public/icons/telegram.svg"
import Telephone from "../public/icons/telephone.svg"
import TestTube from "../public/icons/test-tube.svg"
import Trash from "../public/icons/trash.svg"
import Twitter from "../public/icons/twitter.svg"
import Ufo from "../public/icons/ufo.svg"
import Umbrella from "../public/icons/umbrella.svg"
import Vk from "../public/icons/vk.svg"
import Watch from "../public/icons/watch.svg"
import Youtube from "../public/icons/youtube.svg"
import Zoom from "../public/icons/zoom.svg"

// Enumerate icon name options
export enum IconName {
  Airplane = "airplane",
  Arrow = "arrow",
  Back = "back",
  Bag = "bag",
  Battery = "battery",
  Bell = "bell",
  Bitcoin = "bitcoin",
  Bottle = "bottle",
  Briefcase = "briefcase",
  Browser = "browser",
  Calendar = "calendar",
  Cat = "cat",
  Clip = "clip",
  Cloud = "cloud",
  Coin = "coin",
  Crown = "crown",
  Cup = "cup",
  Delete = "delete",
  Dialogue = "dialogue",
  Dollar = "dollar",
  Dream = "dream",
  ExclamationPoint = "exclamation-point",
  Facebook = "facebook",
  Favorites = "favorites",
  Figma = "figma",
  File = "file",
  Fish = "fish",
  Flag = "flag",
  Flashlight = "flashlight",
  Forward = "forward",
  Geolocation = "geolocation",
  Goal = "goal",
  Headphones = "headphones",
  Heart = "heart",
  Highlight = "highlight",
  Home = "home",
  Hourglass = "hourglass",
  Info = "info",
  Information = "information",
  Instagram = "instagram",
  JoiCoin = "joi-coin",
  Joystick = "joystick",
  Key = "key",
  LbButton = "lb-button-lb",
  LeftArrow = "left-arrow",
  LeftButtonMouse = "left-button-mouse",
  LeftButton = "left-button",
  LetterMail = "letter-mail",
  Lightbulb = "lightbulb",
  Link = "link",
  Load = "load",
  Lock = "lock",
  Louder = "louder",
  LtButton = "lt-button",
  Map = "map",
  Medal = "medal",
  Melody = "melody",
  Menu = "menu",
  Microphone = "microphone",
  Monitor = "monitor",
  Moon = "moon",
  Mountains = "mountains",
  Nesting = "nesting",
  Network = "network",
  NoSound = "no-sound",
  OpenLetter = "open-letter",
  Pause = "pause",
  Pedestal = "pedestal",
  Pin = "pin",
  Pixel = "pixel",
  Play = "play",
  QuestionMark = "question-mark",
  Quiet = "quiet",
  RbButton = "rb-button",
  RightArrow = "right-arrow",
  RightButtonMouse = "right-button-mouse",
  RightButton = "right-button",
  RtButton = "rt-button",
  Sad = "sad",
  Scale = "scale",
  Scale1 = "scale-1",
  Scale2 = "scale-2",
  Scale3 = "scale-3",
  Scroll = "scroll",
  Settings = "settings",
  Shield = "shield",
  ShoppingCart = "shopping-cart",
  Skull = "skull",
  Sliders = "sliders",
  Smile = "smile",
  Sound = "sound",
  Spaceship = "spaceship",
  Star = "star",
  Statistics = "statistics",
  Sun = "sun",
  Sword = "sword",
  Target = "target",
  Telegram = "telegram",
  Telephone = "telephone",
  TestTube = "test-tube",
  Trash = "trash",
  Twitter = "twitter",
  Ufo = "ufo",
  Umbrella = "umbrella",
  Vk = "vk",
  Watch = "watch",
  Youtube = "youtube",
  Zoom = "zoom",
}

interface IProps extends IconProps {
  name: IconName
}
export const Icon: React.FC<IProps> = ({ name, ...props }) => {
  switch (name) {
    case IconName.Airplane:
      return <Airplane {...props} />
    case IconName.Arrow:
      return <Arrow {...props} />
    case IconName.Back:
      return <Back {...props} />
    case IconName.Bag:
      return <Bag {...props} />
    case IconName.Battery:
      return <Battery {...props} />
    case IconName.Bell:
      return <Bell {...props} />
    case IconName.Bitcoin:
      return <Bitcoin {...props} />
    case IconName.Bottle:
      return <Bottle {...props} />
    case IconName.Briefcase:
      return <Briefcase {...props} />
    case IconName.Browser:
      return <Browser {...props} />
    case IconName.Calendar:
      return <Calendar {...props} />
    case IconName.Cat:
      return <Cat {...props} />
    case IconName.Clip:
      return <Clip {...props} />
    case IconName.Cloud:
      return <Cloud {...props} />
    case IconName.Coin:
      return <Coin {...props} />
    case IconName.Crown:
      return <Crown {...props} />
    case IconName.Cup:
      return <Cup {...props} />
    case IconName.Delete:
      return <Delete {...props} />
    case IconName.Dialogue:
      return <Dialogue {...props} />
    case IconName.Dollar:
      return <Dollar {...props} />
    case IconName.Dream:
      return <Dream {...props} />
    case IconName.ExclamationPoint:
      return <ExclamationPoint {...props} />
    case IconName.Facebook:
      return <Facebook {...props} />
    case IconName.Favorites:
      return <Favorites {...props} />
    case IconName.Figma:
      return <Figma {...props} />
    case IconName.File:
      return <File {...props} />
    case IconName.Fish:
      return <Fish {...props} />
    case IconName.Flag:
      return <Flag {...props} />
    case IconName.Flashlight:
      return <Flashlight {...props} />
    case IconName.Forward:
      return <Forward {...props} />
    case IconName.Geolocation:
      return <Geolocation {...props} />
    case IconName.Goal:
      return <Goal {...props} />
    case IconName.Headphones:
      return <Headphones {...props} />
    case IconName.Heart:
      return <Heart {...props} />
    case IconName.Highlight:
      return <Highlight {...props} />
    case IconName.Home:
      return <Home {...props} />
    case IconName.Hourglass:
      return <Hourglass {...props} />
    case IconName.Info:
      return <Info {...props} />
    case IconName.Information:
      return <Information {...props} />
    case IconName.Instagram:
      return <Instagram {...props} />
    case IconName.JoiCoin:
      return <JoiCoin {...props} />
    case IconName.Joystick:
      return <Joystick {...props} />
    case IconName.Key:
      return <Key {...props} />
    case IconName.LbButton:
      return <LbButton {...props} />
    case IconName.LeftArrow:
      return <LeftArrow {...props} />
    case IconName.LeftButtonMouse:
      return <LeftButtonMouse {...props} />
    case IconName.LeftButton:
      return <LeftButton {...props} />
    case IconName.LetterMail:
      return <LetterMail {...props} />
    case IconName.Lightbulb:
      return <Lightbulb {...props} />
    case IconName.Link:
      return <Link {...props} />
    case IconName.Load:
      return <Load {...props} />
    case IconName.Lock:
      return <Lock {...props} />
    case IconName.Louder:
      return <Louder {...props} />
    case IconName.LtButton:
      return <LtButton {...props} />
    case IconName.Map:
      return <Map {...props} />
    case IconName.Medal:
      return <Medal {...props} />
    case IconName.Melody:
      return <Melody {...props} />
    case IconName.Menu:
      return <Menu {...props} />
    case IconName.Microphone:
      return <Microphone {...props} />
    case IconName.Monitor:
      return <Monitor {...props} />
    case IconName.Moon:
      return <Moon {...props} />
    case IconName.Mountains:
      return <Mountains {...props} />
    case IconName.Nesting:
      return <Nesting {...props} />
    case IconName.Network:
      return <Network {...props} />
    case IconName.NoSound:
      return <NoSound {...props} />
    case IconName.OpenLetter:
      return <OpenLetter {...props} />
    case IconName.Pause:
      return <Pause {...props} />
    case IconName.Pedestal:
      return <Pedestal {...props} />
    case IconName.Pin:
      return <Pin {...props} />
    case IconName.Pixel:
      return <Pixel {...props} />
    case IconName.Play:
      return <Play {...props} />
    case IconName.QuestionMark:
      return <QuestionMark {...props} />
    case IconName.Quiet:
      return <Quiet {...props} />
    case IconName.RbButton:
      return <RbButton {...props} />
    case IconName.RightArrow:
      return <RightArrow {...props} />
    case IconName.RightButtonMouse:
      return <RightButtonMouse {...props} />
    case IconName.RightButton:
      return <RightButton {...props} />
    case IconName.RtButton:
      return <RtButton {...props} />
    case IconName.Sad:
      return <Sad {...props} />
    case IconName.Scale:
      return <Scale {...props} />
    case IconName.Scale1:
      return <Scale1 {...props} />
    case IconName.Scale2:
      return <Scale2 {...props} />
    case IconName.Scale3:
      return <Scale3 {...props} />
    case IconName.Scroll:
      return <Scroll {...props} />
    case IconName.Settings:
      return <Settings {...props} />
    case IconName.Shield:
      return <Shield {...props} />
    case IconName.ShoppingCart:
      return <ShoppingCart {...props} />
    case IconName.Skull:
      return <Skull {...props} />
    case IconName.Sliders:
      return <Sliders {...props} />
    case IconName.Smile:
      return <Smile {...props} />
    case IconName.Sound:
      return <Sound {...props} />
    case IconName.Spaceship:
      return <Spaceship {...props} />
    case IconName.Star:
      return <Star {...props} />
    case IconName.Statistics:
      return <Statistics {...props} />
    case IconName.Sun:
      return <Sun {...props} />
    case IconName.Sword:
      return <Sword {...props} />
    case IconName.Target:
      return <Target {...props} />
    case IconName.Telegram:
      return <Telegram {...props} />
    case IconName.Telephone:
      return <Telephone {...props} />
    case IconName.TestTube:
      return <TestTube {...props} />
    case IconName.Trash:
      return <Trash {...props} />
    case IconName.Twitter:
      return <Twitter {...props} />
    case IconName.Ufo:
      return <Ufo {...props} />
    case IconName.Umbrella:
      return <Umbrella {...props} />
    case IconName.Vk:
      return <Vk {...props} />
    case IconName.Watch:
      return <Watch {...props} />
    case IconName.Youtube:
      return <Youtube {...props} />
    case IconName.Zoom:
      return <Zoom {...props} />
    default:
      return <QuestionMark {...props} />
  }
}
