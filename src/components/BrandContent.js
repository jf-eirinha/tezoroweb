import React, { Component } from 'react'

export default class BrandContent extends Component {
    render() {
        return (
            <div className="main-text-content-brands">
                <h1 className="section-title">For Brands</h1>

                <h6 className="bullet-title">Differentiate yourself</h6>
                <p className="p-normal-small">It's hard to stand out on the shelves. Capture economic and environmental conscious consumers by making your product returnable.</p>

                <h6 className="bullet-title">Get recognition</h6>
                <p className="p-normal-small">Tezoro will seek brand partners who want to achieve real impact. These companies will be recognized as organizations which care for the environment. All returnable products will be featured and promoted on Tezoro's website and marketing material.</p>

                <h6 className="bullet-title">Up your quality</h6>
                <p className="p-normal-small">Sustainable design and materials such as aluminum, stainless steel, glass, silicone and other higher grade versions of paper not only look better but are also generally perceived to have higher quality.<sup>1</sup></p>

                <h6 className="bullet-title">Reach your sustainability goals</h6>
                <p className="p-normal-small">Either because of stakeholder pressure or because of government regulation, many companies have sustainability goals which they must reach. Tezoro can dramatically reduce a typical consumer brand impact and help it get to those goals.</p>

                <div className="links-wrapper">
                    <a href="https://www.sciencedirect.com/science/article/abs/pii/S0950329316301203" className="reference-font"><sup>1</sup> Magnier, Lise & Schoormans, Jan & Mugge, Ruth. (2016). Judging a product by its cover: Packaging sustainability and perceptions of quality in food products. Food Quality and Preference. 53. 132-142. 10.1016/j.foodqual.2016.06.006. </a>
                </div>
            </div>
        )
    }
}
