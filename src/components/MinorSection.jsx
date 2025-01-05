/* eslint-disable react/prop-types */

const MinorSection = ({ icon, title, subtitle, children }) => {
    return (
        <section className="flex flex-col gap-6 lg:gap-10 mt-10 mx-4 md:mx-20">
            <div>
                <h3 className="flex flex-row items-center gap-2 font-bold text-xl md:text-3xl">
                    {icon} {title}
                </h3>
                <p className="text-left text-md md:text-xl py-5 border-b-2">
                    {subtitle}
                </p>
            </div>
            <div>{children}</div>
        </section>
    )
}

export default MinorSection