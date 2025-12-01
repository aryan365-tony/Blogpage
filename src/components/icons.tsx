import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="40"
            height="40"
            {...props}
        >
            <circle cx="50" cy="50" r="48" fill="hsl(var(--primary))" />
            <g transform="translate(50,50) scale(1)">
                <circle
                    cx="0"
                    cy="0"
                    r="24"
                    fill="none"
                    stroke="hsl(var(--primary-foreground))"
                    strokeWidth="4"
                    strokeDasharray="150.79"
                    strokeDashoffset="0"
                    transform="rotate(-30)"
                >
                    <animate
                        attributeName="stroke-dashoffset"
                        values="150.79;0"
                        dur="1s"
                        repeatCount="1"
                        begin="0.2s"
                        fill="freeze"
                    />
                </circle>
                <circle
                    cx="0"
                    cy="0"
                    r="16"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="4"
                    strokeDasharray="100.53"
                    strokeDashoffset="0"
                    transform="rotate(30)"
                >
                    <animate
                        attributeName="stroke-dashoffset"
                        values="100.53;0"
                        dur="1s"
                        repeatCount="1"
                        begin="0.4s"
                        fill="freeze"
                    />
                </circle>
            </g>
        </svg>
    );
}
