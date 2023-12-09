import {
	setBorderStyle,
	setDefaultStyle,
	setDisableStyle,
	setRoundStyle,
	setSizeStyle,
	setStretchStyle,
	setVariantStyle,
} from './styles'
import { ButtonStyleProps } from '../Button.types'
import goSetStyles from '@/libs/goSetStyles'

const setButtonStyle = goSetStyles<ButtonStyleProps>(
	setDefaultStyle,
	setVariantStyle,
	setSizeStyle,
	setStretchStyle,
	setBorderStyle,
	setDisableStyle,
	setRoundStyle,
)

export default setButtonStyle
