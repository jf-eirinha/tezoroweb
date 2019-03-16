import React, { Component } from 'react'
import MainMediaContent from './MainMediaContent';

export default class ArchComponent extends Component {
  render() {
    return (
      <div className="arch-component">
        <h1>Archicture</h1>
        <div className="arch-description">
            <MainMediaContent />
            <div>
                <h6>Data from Users</h6>
                <div className="process-desc">
                    Picture data is processed using on device or using Google's REST API with the ML model.
                </div>

                <h6>Data from Operations</h6>
                <div className="process-desc">
                    Logistics data gets constantly fed to SAP S4/HANA.
                </div>

                <h6>Hot and Cold Storage</h6>
                <div className="process-desc">
                    Recent picture data is used to train the model so it improves over time.
                </div>

                <h6>In the Cloud</h6>
                <div className="process-desc">
                    The models and the app will return data to SAP S4/HANA (credits, balances, product information, transactions, rewards redeemed) while picture files go to Google Cloud Storage.
                </div>

                <h6>Access to the data and analytics</h6>
                <div className="process-desc">
                    Interfacing cold and hot storage running on-memory from HANA is BigQuery. BigQuery will make all of this information available.
                </div>

            </div>
        </div>
      </div>
    )
  }
}
