import React from "react";
import "./src/style.css";

export default function Blurify({
    children,
    on = false,
    intensity = 4,
    usePreloader = true,
    preloaderPrimaryColor = "#000",
    preloaderSecondaryColor = "#999",
    preloaderBorderWidth = 2,
    preloaderSize = 36,
}) {
    const blur = (i) => {
        return { filter: on ? `blur(${i}px)` : "" };
    };

    const styledPreloaderContainer = {
        position: "absolute",
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
    };

    const stylesPreloader = {
        zIndex: 1,
        borderRadius: `${preloaderSize / 2}px`,
        height: `${preloaderSize}px`,
        width: `${preloaderSize}px`,
        borderTop: `solid ${preloaderBorderWidth}px ${preloaderPrimaryColor}`,
        borderLeft: `solid ${preloaderBorderWidth}px ${preloaderSecondaryColor}`,
        borderRight: `solid ${preloaderBorderWidth}px ${preloaderSecondaryColor}`,
        borderBottom: `solid ${preloaderBorderWidth}px ${preloaderSecondaryColor}`,
    };

    return (
        <div className="relative">
            {on && usePreloader && (
                <div style={styledPreloaderContainer}>
                    <div
                        className="blurify__preloader"
                        style={stylesPreloader}
                    ></div>
                </div>
            )}
            <div style={blur(intensity)}>{children}</div>
        </div>
    );
}
