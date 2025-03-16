/* eslint-disable react/prop-types */
import { Suspense } from "react";
import { lazy } from "react";

const importSvg = (name) => {
    return lazy(() =>
        import(`@/assets/tools/${name}.svg`).catch(() => ({
            default: () => <span>{name}</span>,
        }))
    );
};

const SvgTool = ({ name, ...props }) => {
    const SVG = importSvg(name);

    return (
        <Suspense fallback={<span>{name}</span>}>
            <SVG {...props} />
        </Suspense>
    );
};

export default SvgTool
