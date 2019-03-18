import React, { Component } from 'react';

export default class ArchComponent extends Component {
  render() {
    return (
        <div className="arch-description">

          <div>
            <h6 className="bullet-title">Data from Users</h6>
            <p className="p-normal-small">
              Picture data is processed using on device or using Google's REST API with the ML model.
                </p>

            <h6 className="bullet-title">Data from Operations</h6>
            <p className="p-normal-small">
              Logistics data gets constantly fed to SAP S4/HANA.
                </p>

            <h6 className="bullet-title">Hot and Cold Storage</h6>
            <p className="p-normal-small">
              Recent picture data is used to train the model so it improves over time.
                </p>

            <h6 className="bullet-title">In the Cloud</h6>
            <p className="p-normal-small">
              The models and the app will return data to SAP S4/HANA (credits, balances, product information, transactions, rewards redeemed) while picture files go to Google Cloud Storage.
                </p>

            <h6 className="bullet-title">Access to the data and analytics</h6>
            <p className="p-normal-small">
              Interfacing cold and hot storage running on-memory from HANA is BigQuery. BigQuery will make all of this information available.
                </p>

          </div>
        </div>
    )
  }
}
