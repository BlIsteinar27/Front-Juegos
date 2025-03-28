import React from 'react'

const BreadCrumbs = () => {
    return (
        <>
            {/* Start Breadcrumbs */}
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">Single Product</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-nav">
                                <li><a href="index.html"><i className="lni lni-home" /> Home</a></li>
                                <li><a href="index.html">Shop</a></li>
                                <li>Single Product</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrumbs */}
        </>
    )
}

export default BreadCrumbs