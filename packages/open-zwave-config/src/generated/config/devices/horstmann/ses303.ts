import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0059:0003:000D",
            name: "OzwInfoPage",
          },
          { text: "images/horstmann/ses303.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1175/",
            id: "0003",
            name: "ZWProductPage",
            type: "000D",
          },
          {
            text:
              "Step 1.On the Z-Wave controller, select Include for adding a device to the network. \nStep 2: On the SES 303, press the button, hold and release after 1 second to send a request (Network Information Frame) to join the network. On successful inclusion the LED will flash 2 times. The total process can take up to 20 seconds. If the LED flashes 4-times this means that the inclusion process has failed, so try moving the SES 303 to another position and repeat the Inclusion steps. If the inclusion process fails again, the device may be already included in another network. So first exclude and then include the device. The controller will show when the inclusion operation is successful.",
            name: "InclusionDescription",
          },
          {
            text:
              "Please use this procedure only when the primary controller is missing or otherwise inoperable.\nTo reset the device to factory resst, press the button 3 times within 3 seconds it will put the device in factory default, that include setting all the configuration, Association to factory default and removing the device from Z-Wave network.",
            name: "ResetDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0003",
            name: "FrequencyName",
            type: "000D",
          },
          {
            text:
              "Device can be wakeup by button press of more then one second, devcie will stay in wakeup state for about 10 seconds.\ndevice will also wakeup on the every wakeup interval configured by controller. The minimum wakeup interval can be configured is 2 minutes and maximum wakeup interval can be configured is 24 hours in setps of one minte. \nDefault wakeup interval is 24 hours.",
            name: "WakeupDescription",
          },
          { text: "SES 303", id: "0003", name: "Identifier", type: "000D" },
          { text: "Environmental Sensor", name: "Name" },
          {
            text:
              "The Environmental Sensor (SES 303) measures temperature and humidity. The sensors are battery-operated devices which transmit information to an associated device in a network. It can support either 1 thermistor (SES 001) or up to 4 external digital temperature sensors (SES 002/003). SES 303 operates on 2x AA batteries, providing a nominal life of 2 years (with on-board sensors operating with the default configuration).",
            name: "Description",
          },
          {
            text:
              "Step 1.On the Z-Wave controller, select exclusion for removing a device from the network. \nStep 2: On the SES 303, press the button, hold and release after 1 second to send a request (Network Information Frame) to remove from the network. On successful exclusion the LED will flash 2 times. The total process can take up to 2 seconds. If the LED flashes 4-times this means that the exclusion process has failed, so try moving the SES 303 to another position and repeat the exclusion steps. The controller will show when the exclusion operation is successful.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1175/SES 302 - 303 TH Sensors User cum Installation Manual (Secure Controls UK Ltd) BGX501-923-R02.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1175/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
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
            index: "1",
            instance: "1",
            label: "Delta Temperature change internal",
            max: "255",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "Change between temperatures to trigger a temperature report (step 0.1) (Default 0 = disabled)",
          },
          {
            genre: "config",
            index: "1",
            instance: "2",
            label: "Delta Temperature change external 2",
            max: "255",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "Change between temperatures to trigger a temperature report (step 0.1) (Default 0 = disabled)",
          },
          {
            genre: "config",
            index: "1",
            instance: "3",
            label: "Delta Temperature change external 3",
            max: "255",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "Change between temperatures to trigger a temperature report (step 0.1) (Default 0 = disabled)",
          },
          {
            genre: "config",
            index: "1",
            instance: "4",
            label: "Delta Temperature change external 4",
            max: "255",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "Change between temperatures to trigger a temperature report (step 0.1) (Default 0 = disabled)",
          },
          {
            genre: "config",
            index: "1",
            instance: "5",
            label: "Delta Temperature change external 5",
            max: "255",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "Change between temperatures to trigger a temperature report (step 0.1) (Default 0 = disabled)",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Temperature reporting interval internal",
            max: "255",
            min: "0",
            type: "byte",
            value: "5",
            Help:
              "Temperature reporting interval in minutes (Default 5 minutes)",
          },
          {
            genre: "config",
            index: "2",
            instance: "2",
            label: "Temperature reporting interval external 2",
            max: "255",
            min: "0",
            type: "byte",
            value: "5",
            Help:
              "Temperature reporting interval in minutes (Default 5 minutes)",
          },
          {
            genre: "config",
            index: "2",
            instance: "3",
            label: "Temperature reporting interval external 3",
            max: "255",
            min: "0",
            type: "byte",
            value: "5",
            Help:
              "Temperature reporting interval in minutes (Default 5 minutes)",
          },
          {
            genre: "config",
            index: "2",
            instance: "4",
            label: "Temperature reporting interval external 4",
            max: "255",
            min: "0",
            type: "byte",
            value: "5",
            Help:
              "Temperature reporting interval in minutes (Default 5 minutes)",
          },
          {
            genre: "config",
            index: "2",
            instance: "5",
            label: "Temperature reporting interval external 5",
            max: "255",
            min: "0",
            type: "byte",
            value: "5",
            Help:
              "Temperature reporting interval in minutes (Default 5 minutes)",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Delta humidity change",
            max: "255",
            min: "0",
            type: "byte",
            value: "5",
            Help:
              "Change between humidity to trigger a humidity report (Default 5 = 5% relative humidity)",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Humidity reporting interval",
            max: "255",
            min: "0",
            type: "byte",
            value: "5",
            Help: "Humidity reporting interval in minutes (Default 5 minutes)",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "1" }],
          },
        ],
      },
    ],
  },
};

export default config;
