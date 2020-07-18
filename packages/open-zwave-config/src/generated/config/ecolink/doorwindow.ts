import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/014A:0002:0001",
            name: "OzwInfoPage",
          },
          { text: "images/ecolink/doorwindow.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1498/",
            id: "0002",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0002",
            name: "FrequencyName",
            type: "0001",
          },
          { text: "EU Z-WAVE DOOR WINDOW SENSOR", name: "Name" },
          {
            text:
              "Includes Brown & White covers\nSleek design virtually disappears\nEasy-to-open case requires no special tools\nCase tamper protection\nIdeal for double-hung window\nUp to 3 year battery life on 1 CR123A lithium battery\nUses rare earth magnet for up to 5/8th inch gap detection\nIncludes white and brown cases",
            name: "Description",
          },
          {
            text: "DWZWAVE2.5-ECO",
            id: "0002",
            name: "Identifier",
            type: "0001",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2927/EU Z-wave Door Window Sensor H114101 ZWAVE_Ver03.pdf",
            name: "ProductManual",
          },
          {
            text:
              "The sensor will wake up every so often and when the case is closed to send a Wake-Up Notification to allow the life line master node controller that the sensor is now available for any queued messages that the controller may have for the sensor. The time between Wake-Up Notifications can be configured with the Wake-Up Notification command class to be between 1 hour and 1 week with interval steps of 200 seconds.",
            name: "WakeupDescription",
          },
          {
            text:
              "The sensor must be added to a Z-Wave network prior to use. To include the sensor in a network both the sensor and the network controller must be in inclusion mode at the same time. Refer to the instructions provided by the manufacturer of your specific controller for details on initiating the controller’s inclusion mode. \n\nSTEP ONE  \t     Start by placing the controller into inclusion mode.\n\nSTEP TWO\t    Activate inclusion mode for the sensor by removing the plastic pull-tab from the back of the sensor.  When the\n    inclusion process is complete, the LED on the sensor will be solid blue, then go out.\n\nSTEP THREE    Test the sensor.  Place the magnet next to the sensor to represent a closed position (see Installation section \n\t      to see where to position the magnet).  If the LED flashes ONE TIME, it is successfully communicating on your \n\t      Zwave network.  If the LED on the sensor flashes slow and steady for 5 seconds, you need to repeat the \n\t      inclusion process.",
            name: "InclusionDescription",
          },
          {
            text:
              "Exclusion mode on the senor is initiated following the same exact procedure as inclusion.",
            name: "ExclusionDescription",
          },
          {
            text:
              "To restore this sensor to factory default settings, follow the instructions in this manual to exclude this sensor from the Z-Wave network. Upon completion of removal from the network the sensor will restore itself to factory default settings automatically.  Use this procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/2927/",
            id: "0002",
            name: "ZWProductPage",
            type: "0004",
          },
          {
            text: "CEPT (Europe)",
            id: "0002",
            name: "FrequencyName",
            type: "0004",
          },
          { text: "H114101", id: "0002", name: "Identifier", type: "0004" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/790/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1498/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2927/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 6,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      { id: "128", Compatibility: [{ RefreshOnWakeup: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Basic Report", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
