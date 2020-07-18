import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/000C:0009:0201",
            name: "OzwInfoPage",
          },
          { text: "images/homeseer/hs-ms100plus.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2729/",
            id: "0009",
            name: "ZWProductPage",
            type: "0201",
          },
          {
            text:
              "1)Power on the device,\n2) Press and hold the Z button for more than 20 seconds,\n3) If holding time more than 20seconds, the LED indicator will keep on for 2 seconds, which means resetting is complete.\n4) The reset feature works only when the device has been included into a Z-Wave network.\n\nUse this procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0009",
            name: "FrequencyName",
            type: "0201",
          },
          {
            text:
              "1) Open the cover.\n2) Place the device within the direct range of your Z-Wave controller.\n3) Set the main controller in add mode (see the controller’s manual).\n4) Click the Z-button once or triple click the Z-button quickly, the LED indicator should blink fast. \n5) Wait for the adding process to end.\n6) Successful adding will be confirmed by the Z-Wave controller’s message.",
            name: "InclusionDescription",
          },
          { text: "HS-MS100+", id: "0009", name: "Identifier", type: "0201" },
          {
            text:
              "1) Open the cover.\n2) Place the device within the direct range of your Z-Wave controller.\n3) Set the main controller remove mode (see the controller’s manual).\n4) Triple click the Z-button quickly, the LED indicator should blink fast.\n5) Wait for the removing process to end.\n6) Successful adding will be confirmed by the Z-Wave controller’s message.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Motion sensor can be included and operated in any Z-Wave network with other Z-Wave certified devices. \n\nThe features list:\n1)\tZ-Wave Plus certified for wide compatibility (500 serials product).\n2)\tSupports security 0 and security 2 protected mode with AES-128 encryption.\n3)\tMotion sensor.\n4)\tTamper alarm by shock sensor.\n5)\tThe battery life is up to 1 year.\n6)\tLow battery alarm.\n7)\tSupport firmware OTA.",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2729/User Manual for motion sensor-revised .pdf",
            name: "ProductManual",
          },
          {
            text:
              "Press and hold the Z button for more than 5 seconds and release.",
            name: "WakeupDescription",
          },
          { text: "Motion Sensor", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2729/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "12",
            label: "Motion Sensor Sensitivity",
            max: "8",
            min: "0",
            size: "1",
            type: "list",
            value: "8",
            Help:
              "Motion Sensor Sensitivity. 0 - Sensor is OFF, 8 - Max sensitivity.",
            Item: [
              { label: "OFF", value: "0" },
              { label: "1", value: "1" },
              { label: "2", value: "2" },
              { label: "3", value: "3" },
              { label: "4", value: "4" },
              { label: "5", value: "5" },
              { label: "6", value: "6" },
              { label: "7", value: "7" },
              { label: "8", value: "8" },
            ],
          },
          {
            genre: "config",
            index: "14",
            label: "Basic Set Command",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Enable / disable the basic set command send to group 2",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "15",
            label: "Value for Basic Set Command",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n                Define BASIC SET VALUE to nodes associated with group 2 when motion alarm is triggered and is canceled.\n            ",
            Item: [
              {
                label: "255 alarm is triggered, 0 alarm is canceled",
                value: "0",
              },
              {
                label: "0 alarm is triggered, 255 alarm is canceled",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "17",
            label: "Shock Sensor",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "when the value is Disable, the product will not sends a vibration alarm after moving or shaking; \n                when the value is Enable, the product will sends a vibration alarm after moving or shaking",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "18",
            label: "Motion Timeout Interval",
            max: "65525",
            min: "0",
            type: "short",
            units: "seconds",
            value: "600",
            Help: "Motion Timeout Interval, seconds",
          },
          {
            genre: "config",
            index: "32",
            label: "Low battery threshold",
            max: "50",
            min: "0",
            size: "1",
            type: "list",
            units: "%",
            value: "20",
            Help: "Low battery reporting threshold, %",
            Item: [
              { label: "0", value: "0" },
              { label: "10", value: "10" },
              { label: "20", value: "20" },
              { label: "30", value: "30" },
              { label: "40", value: "40" },
              { label: "50", value: "50" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Basic Set", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
