import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          { text: "10 Year Smoke Detector", name: "Name" },
          {
            text:
              "This products consists of a standard high-quality photo electric Smoke detector with a pluggable Z-Wave wireless interface module. The Smoke detector will also work as a stand alone product and is certified as '10 year Smoke Detector' The smoke chamber of the detector has a stainless steel reel with antistatic plastic chamber. A button allows on-device test of smoke chamber, electronics and battery. The device also offers a built-in self test and an electronic smoke chamber test to avoid the use of test aerosol. A low battery warning will last for 30 days but full function of the detector is guaranteed during this time. The Z-Wave module allows to report the smoke and low battery alarm wirelessly to a central controller.",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/0154:0004:000D",
            name: "OzwInfoPage",
          },
          {
            text:
              "https://www.popp.eu/products/sensors/10-jahres-rauchmelder-700342/",
            name: "ProductPage",
          },
          {
            text: "https://www.popp.eu/support/manuals/",
            name: "ProductSupport",
          },
          { text: "images/popp/009402.png", name: "ProductPic" },
          { text: "https://www.popp.eu/005107en", name: "ProductManual" },
          {
            text: "A double click on the Z-Wave button wakes up the device>",
            name: "WakeupDescription",
          },
          {
            text:
              "Secure Inclusion: Push the button for 3 seconds, Unsecure Inclusion: Push the button for 1 seconds",
            name: "InclusionDescription",
          },
          {
            text: "Push the button for 1 second",
            name: "ExclusionDescription",
          },
          {
            text:
              "To reset the device keep the button pushed for 10 seconds. After 5 seconds the led starts flashing and after another 5 seconds there is a short beep signaling the successful reset back to factory defaults. Use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "From the User Manual and the 009402.xml",
                author: "Márton Rubi - rubimart@airlink.hu",
                date: "06 Jan 2020",
                revision: 1,
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
            index: "3",
            instance: "1",
            label: "Value of On-Command",
            max: "99",
            min: "0",
            size: "1",
            type: "byte",
            value: "99",
            Help:
              "This value is sent as BASIC Set to Association Group 3 when an Smoke Alarm occurs.",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Value of Off-Command",
            max: "99",
            min: "0",
            size: "1",
            type: "byte",
            value: "99",
            Help:
              "This value is sent as BASIC Set to Association Group 3 when an Smoke Alarm is cleared. ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "10" },
              {
                index: "2",
                label: "Switching Command when Alarm",
                max_associations: "10",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
