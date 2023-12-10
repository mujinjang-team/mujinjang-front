import { createGlobalStyle } from 'styled-components'

const Normalize = createGlobalStyle`
	html,
	body,
	#root,
	#root > .App {
		width: 100%;
		height: 100%;
		font-size: 14px;
		font-weight: 400;
		color: #000000;
	}
	
	body * {
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", "맑은 고딕", "Malgun Gothic",
        Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		box-sizing: border-box;
		-webkit-tap-highlight-color: transparent;
		-webkit-text-fill-color: inherit;
		color: inherit;
	}

	a {
		text-decoration: none;
		color: inherit;
		cursor: pointer;
	}

	button {
		padding: 0;
		margin: 0;
		background: none;
		border: none;
		cursor: pointer;
	}

	li {
		list-style: none;
	}
`

export default Normalize
