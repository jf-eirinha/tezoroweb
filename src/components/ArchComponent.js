import React, { Component } from 'react';

export default class ArchComponent extends Component {
  render() {
    return (
        <div className="arch-description">

          <div>
            <h6 className="bullet-title">Data from Users</h6>
            <p className="p-normal-small">
            Picture data is processed using on device or using Google's REST API with the ML model. Other usage data goes directly to HANA.
                </p>

            <h6 className="bullet-title">Data from Operations</h6>
            <p className="p-normal-small">
            Logistics data gets constantly fed to SAP S4/HANA. The several different image classifiers also make use of the ML models. Other data such as pick-up time stamps, inventory, etc. is stored to SAP’s database.
                </p>

            <h6 className="bullet-title">Hot and Cold Storage</h6>
            <p className="p-normal-small">
            Recent picture data is used to train our models so they improve over time. Old data get can be “cold stored” to Google Storage.
            </p>

            <h6 className="bullet-title">In the Cloud</h6>
            <p className="p-normal-small">
              The models and the app will return data tables to SAP S4/HANA (credits, balances, product information, transactions, rewards redeemed, etc.) while picture files go to Google Cloud Storage.
            </p>

            <h6 className="bullet-title">Access to data and analytics</h6>
            <p className="p-normal-small">
              Interfacing "cold data" on Google Storage and hot storage running in-memory on HANA is BigQuery. BigQuery will make all of this information available so we can extract useful business insights.
            </p>

          </div>
        </div>
    )
  }
}
