
/**
 * for further infos : https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#line_styles
 */
export declare interface LineStyleInterface {
    width?: number
    cap?: string & ("butt" | "round" | "square")
    join?: string & ("round" | "bevel" | "miter")
    miterLimit?: number
    dash?: [number, number]
    dashOffset?: number
}

/**
 * for further infos: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text#styling_text
 */

export declare interface TextStyleInterface {
    color: string
    /**
     * Use `TextStyleInterface.font` as the CSS property `font`.
     */
    font?: string
    textAlign?: string & ("start" | "end" | "left" | "right" | "center")
    textBaseline?: string & ("top" | "hanging" | "middle" | "alphabetic" | "ideographic" | "bottom")
    direction?: string & ("ltr" | "rtl" | "inherit")
}

export declare interface GraphicStylesInterface {
    color: string
    type: 'fill' | 'stroke'
}

export declare interface GenericGraphicStylesInterface {
    graphic: GraphicStylesInterface
    /**
     * only for Line
     */
    line: LineStyleInterface
    /**
     * only for Text
     */
    text: TextStyleInterface
}
