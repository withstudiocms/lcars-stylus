import { ComponentProps } from 'astro/types';
import { CopyrightTagline, HorizontalPositions, NavigationItem } from '../types';
import { LCARSAudio, LCARSLoading } from '../utility/index'

export interface SharedLayoutProps {
    siteTitle: string;
    key: string;
    navigation: NavigationItem[];
    copyright: CopyrightTagline;
    titlePosition?: HorizontalPositions;
    externalLink?: {
        href: string;
        text: string;
    },
    audioConfig?: ComponentProps<typeof LCARSAudio>;
    loadingConfig?: ComponentProps<typeof LCARSLoading>;
}