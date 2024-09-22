import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
			nftCustom: {
				// Body
				body_bg: "var(--nft-body-bg)",
				body_text: "var(--nft-body-text)", // Not being used
				
				// Header
				header_bg: "var(--nft-header-bg)",
				header_logo: "var(--nft-header-logo)",
				header_logo_hover: "var(--nft-header-logo-hover)",
				header_navlinks: "var(--nft-header-navlinks)",
				header_navlinks_hover: "var(--nft-header-navlinks-hover)",
				header_button_text: "var(--nft-header-button-text)",
				header_button_text_hover: "var(--nft-header-button-text-hover)",
				header_button_bg: "var(--nft-header-button-bg)",
				header_button_border: "var(--nft-header-button-border)",
				header_button_hover: "var(--nft-header-button-hover)",
				header_mobile_menu_toggle: "var(--nft-header-mobile-menu-toggle)",
				header_mobile_menu_toggle_hover: "var(--nft-header-mobile-menu-toggle-hover)",
				header_mobile_menu_bg: "var(--nft-header-mobile-menu-bg)",
				header_mobile_menu_text: "var(--nft-header-mobile-menu-text)",
				header_mobile_menu_text_hover: "var(--nft-header-mobile-menu-text-hover)",
				
				// Footer
				footer_bg: "var(--nft-footer-bg)",
				// Discover Section

				// SVGs
				user_svg: "var(--nft-user-svg)",
				envelope_simple_svg: "var(--nft-envelope-simple-svg)",
				lock_key_svg: "var(--nft-lock-key-svg)",
				eye_svg: "var(--nft-eye-svg)",
				eye_slash_svg: "var(--nft-eye-slash-svg)",
				arrow_right_svg: "var(--nft-arrow-right-svg)",
				rocket_launch_svg: "var(--nft-rocket-launch-svg)",
				rocket_svg: "var(--nft-rocket-svg)",
				arrow_left_svg: "var(--nft-arrow-left-svg)",
				globe_svg: "var(--nft-globe-svg)",
				trend_up_svg: "var(--nft-trend-up-svg)",
				user_circle_svg: "var(--nft-user-circle-svg)",
				plus_svg: "var(--nft-plus-svg)",
				magnifying_glass_svg: "var(--nft-magnifying-glass-svg)",
				list_svg: "var(--nft-list-svg)",
				storefront_svg: "var(--nft-storefront-svg)",
				wallet_svg: "var(--nft-wallet-svg)",
				copy_svg: "var(--nft-copy-svg)",
				discord_logo_svg: "var(--nft-discord-logo-svg)",
				youtube_logo_svg: "var(--nft-youtube-logo-svg)",
				twitter_logo_svg: "var(--nft-twitter-logo-svg)",
				instagram_logo_svg: "var(--nft-instagram-logo-svg)",
			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  },
  plugins: [require("tailwindcss-animate"), nextui()],
};
export default config;
