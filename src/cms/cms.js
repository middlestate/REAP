import CMS from 'netlify-cms-app'
import '../assets/sass/styles.sass'
import HomePagePreview from './previews/HomePagePreview'
import AboutPagePreview from './previews/AboutPagePreview'
import ProgramPagePreview from './previews/ProgramPagePreview'
import ContactPagePreview from './previews/ContactPagePreview'

CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('program', ProgramPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
