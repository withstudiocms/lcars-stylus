/**
 * Defines the color types and constants for the LCARS-themed website, including a comprehensive list of color names that align with the iconic LCARS design aesthetic, as well as template literal types for standardized color class naming conventions used throughout the design for consistent styling.
 */
export type LcarsColorway = "gray" | "white" | "black" | "pale-canary" | "golden-tanoi" | "neon-carrot" | "eggplant" | "lilac" | "anakiwa" | "mariner" | "bahama-blue" | "red-alert" | "blue-bell" | "melrose" | "hopbush" | "chestnut-rose" | "orange-peel" | "atomic-tangerine" | "danub" | "indigo" | "lavender-purple" | "cosmic" | "red-damask" | "medium-carmine" | "bourbon" | "sandy-brown" | "periwinkle" | "dodger-blue" | "dodger-blue-alt" | "blue" | "navy-blue" | "husk" | "rust" | "tamarillo";

/**
 * Represents the base LCARS colors in the LCARS-themed website, defined as a template literal type that combines the "lcars-" prefix with the specific color names from the LcarsColorway type to create a standardized set of color classes that can be used throughout the design for consistent styling.
 */
export type LcarsColors = `lcars-${LcarsColorway}`;

/**
 * Represents the background colors in the LCARS-themed website, defined as a template literal type that combines the base LCARS colors with a "-bg" suffix to create specific background color classes that can be used throughout the design for consistent styling.
 */
export type LcarsBackgroundColors = `${LcarsColors}-bg`;

/**
 * Represents the border colors in the LCARS-themed website, defined as a template literal type that combines the base LCARS colors with a "-border" suffix to create specific border color classes that can be used throughout the design for consistent styling.
 */
export type LcarsBorderColors = `${LcarsColors}-border`;

/**
 * Represents the text colors in the LCARS-themed website, defined as a template literal type that combines the base LCARS colors with a "-color" suffix to create specific text color classes that can be used throughout the design for consistent styling.
 */
export type LcarsTextColors = `${LcarsColors}-color`;

/**
 * Defines an interface for components that support LCARS colorways, requiring them to accept a "color" prop that must be set to one of the defined LcarsColorway values, ensuring that any component implementing this interface will have a consistent color theming option based on the LCARS design aesthetic.
 */
export interface SupportsColorway {
    /**
     * The color prop for the component, which must be set to one of the defined LcarsColorway values to apply consistent color theming based on the LCARS design aesthetic, ensuring that components adhering to this interface will maintain a cohesive visual style throughout the LCARS-themed website.
     */
    color: LcarsColorway;
}

/**
 * Defines an interface for components that support LCARS colorways, allowing them to accept an optional "color" prop that can be set to any of the defined LcarsColorway values, enabling consistent color theming across the LCARS-themed website.
 */
export interface SupportsOptionalColorway {
    /**
     * The color prop for the component, which can be set to any of the defined LcarsColorway values to apply consistent color theming based on the LCARS design aesthetic, or left undefined if no specific color is desired, allowing for flexibility in styling while maintaining the option for cohesive design.
     */
    color?: LcarsColorway;
}

/**
 * Defines an interface for components that support unit sizing, allowing them to accept an optional "u" prop that can be set to either a single number or a string in the format of "number-number", providing flexibility in defining the size of components in terms of LCARS units for consistent layout and design across the website.
 */
export interface SupportsUnitSizing {
    /**
     * The Unit size for the component, which can be either a single number representing the number of LCARS units or a string in the format of "number-number" to specify a range of units, allowing for flexible sizing options while maintaining consistency with the LCARS design principles.
     */
    u?: number | `${number}-${number}`;
}

/**
 * Defines the text size options for the LCARS-themed website, represented as a union of string literals that specify different text size classes (e.g., "big", "large", "huge") that can be applied to components to achieve the desired text styling consistent with the LCARS design aesthetic.
 */
export type TextSizes = "big" | "large" | "huge";

/**
 * Defines the vertical positions for components in the LCARS-themed website, represented as a union of string literals "top" and "bottom", which can be used to specify the vertical alignment of components within the layout, ensuring consistent positioning based on the LCARS design principles.
 */
export type VerticalPositions = "top" | "bottom";

/**
 * Defines the horizontal positions for components in the LCARS-themed website, represented as a union of string literals "left" and "right", which can be used to specify the horizontal alignment of components within the layout, ensuring consistent positioning based on the LCARS design principles.
 */
export type HorizontalPositions = "left" | "right";

/**
 * Defines a type for XY positions in the LCARS-themed website, which can be either vertical positions (top or bottom) or horizontal positions (left or right), allowing components to specify their alignment in both axes for flexible and consistent layout design based on the LCARS aesthetic.
 */
export type XYPositions = VerticalPositions | HorizontalPositions;

/**
 * Defines the text box position options for the LCARS-themed website, represented as a union of string literals that include base positions ("right", "centered") as well as combinations of vertical and horizontal positions (e.g., "bottom-right", "full-centered"), allowing for versatile placement of text boxes within the layout while adhering to the LCARS design principles.
 */
export type TextBoxPositionsBase = "right" | "centered";

/**
 * Defines a type for text box positions in the LCARS-themed website, which includes base positions (right and centered) as well as combinations of vertical and horizontal positions (e.g., bottom-right, full-centered), providing a comprehensive set of options for positioning text boxes within the layout while maintaining consistency with the LCARS design aesthetic.
 */
export type TextBoxPositions = TextBoxPositionsBase | "bottom" | `bottom-${TextBoxPositionsBase}` | "full-centered" | "centered-right";

/**
 * Represents a navigation item in the LCARS-themed website. Each item has a text label, a hyperlink reference, a unique key for identification, and a color from the LCARS color palette.
 */
export type NavigationItem = {
    text: string;
    href: string;
    key: string;
    color?: LcarsColorway;
};

/**
 * Represents a copyright tagline in the LCARS-themed website, consisting of a preamble (e.g., "© 2024") and a company name, which can be used to display copyright information in the footer or other relevant sections of the website while maintaining the LCARS design aesthetic.
 */
export type CopyrightTagline = {
    preamble: string;
    company: string;
}
