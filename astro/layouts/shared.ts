import { ComponentProps } from 'astro/types';
import { CopyrightTagline, HorizontalPositions, NavigationItem } from '../types';
import { LCARSAudio, LCARSLoading } from '../utility/index'

/**
 * Defines the shared properties for layout components in the LCARS-themed website, including site title, navigation items, copyright information, and optional configurations for title positioning, external links, audio settings, and loading indicators, allowing for consistent and flexible layout design across different pages while adhering to the LCARS design principles.
 */
export interface SharedLayoutProps {
    /**
     * The title of the website, which can be displayed prominently in the layout and used for branding purposes, providing a clear and consistent identity for the LCARS-themed website.
     */
    siteTitle: string;

    /**
     * Current navigation page key, which can be used to highlight the active page in the navigation menu, enhancing user experience by providing visual feedback on the current location within the website.
     */
    key: string;

    /**
     * Navigation items for the website, represented as an array of objects that include text labels, hyperlink references, unique keys for identification, and optional colors from the LCARS color palette, allowing for dynamic and customizable navigation menus that align with the LCARS design aesthetic.
     */
    navigation: NavigationItem[];

    /**
     * Copyright information for the website, represented as an object that includes a preamble (e.g., "MIT License") and a company/project name, which can be used to display copyright information in the footer or other relevant sections of the website while maintaining the LCARS design aesthetic.
     */
    copyright: CopyrightTagline;

    /**
     * Optional configuration for the title position, which can be set to either "left" or "right" to specify the horizontal alignment of the site title within the layout, providing flexibility in design while maintaining consistency with the LCARS aesthetic.
     */
    titlePosition?: HorizontalPositions;

    /**
     * Optional configuration for an external link, which can be used to provide additional navigation options or resources outside of the main website, enhancing user experience by offering relevant links while maintaining the LCARS design principles through customizable text and hyperlink references.
     */
    externalLink?: {
        href: string;
        text: string;
    },

    /**
     * Optional configuration for the LCARS audio component, which can be used to provide background music or sound effects on the website, enhancing the immersive experience of the LCARS-themed design while allowing for customization of audio settings such as volume, autoplay, and loop options.
     */
    audioConfig?: ComponentProps<typeof LCARSAudio>;

    /**
     * Optional configuration for the LCARS loading component, which can be used to display a loading indicator while content is being fetched or processed, enhancing user experience by providing visual feedback during loading states in the LCARS-themed website.
     */
    loadingConfig?: ComponentProps<typeof LCARSLoading>;
}