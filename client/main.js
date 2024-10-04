import { BlazeUI } from 'meteor/blazeui:core'
import * as Components from 'meteor/blazeui:components'
import '@blazeui/theme-milkyway/milkyway.css'
import '../imports/ui/components/header/Header'
import '../imports/ui/components/hello/Hello'
import './main.html'
import './main.css'

BlazeUI.register(...Object.values(Components))
