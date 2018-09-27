import React from 'react'

class HomeSection extends React.Component {
    render() {
        const { anchor, title, description, children, blowWidth } = this.props;

        const childrenContainerWidth = blowWidth ? 'w-50-ns' : 'w-30-ns';

        return (
            <section id={anchor} className="mb4 mt7-ns mt4 flex flex-row-ns flex-column items-top">
                <div className="w-20">
                </div>

                <div className="w-30-ns">
                    <h2 className="f4 fw7 dark-gray">{title}</h2>

                    {
                        description &&
                        <p className="f7">
                            {description}
                        </p>
                    }
                </div>

                <div className={`${childrenContainerWidth} f5 mt0`}>
                    {children}
                </div>
            </section>
        )
    };
};

export default HomeSection
