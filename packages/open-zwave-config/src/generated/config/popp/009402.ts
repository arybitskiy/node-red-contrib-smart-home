import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0154:0004:0004",
            name: "OzwInfoPage",
          },
          { text: "images/popp/009402.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2078/",
            id: "0004",
            name: "ZWProductPage",
            type: "0004",
          },
          {
            text:
              "This products consists of a standard high-quality photo electric Smoke detector with a pluggable Z-Wave wireless interface module. The Smoke detector will also work as a stand alone product and is certified as '10 year Smoke Detector' The\nsmoke chamber of the detector has a stainless steel reel with antistatic plastic chamber.\nA button allows on-device test of smoke chamber, electronics and battery. The device also offers a built-in self test and\nan electronic smoke chamber test to avoid the use of test aerosol. A low battery warning will last for 30 days but full\nfunction of the detector is guaranteed during this time.\nThe Z-Wave module allows to report the smoke and low battery alarm wirelessly to a central controller. The detector can\nalso be used as a wireless siren for alarm system or other applications.",
            name: "Description",
          },
          {
            text:
              "To reset the device keep the button pushed for 10 seconds. After 5 seconds the led starts flashing and after another 5\nseconds there is a short beep signaling the successful reset back to factory defaults. Use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2078/009402Manual.pdf",
            name: "ProductManual",
          },
          { text: "Ei600ZW", id: "0004", name: "Identifier", type: "0004" },
          {
            text:
              "To exclude the device start the inclusion on your controller and then hit  the little button on the wireless module for 1 second",
            name: "ExclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0004",
            name: "FrequencyName",
            type: "0004",
          },
          {
            text:
              "To include the device start the inclusion on your controller and then hit the little button on the wireless module for 1 second",
            name: "InclusionDescription",
          },
          { text: "10 Year Smoke Detector and Siren", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2078/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
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
            label: "Siren alarm sequence interval",
            max: "127",
            min: "6",
            size: "1",
            type: "byte",
            value: "10",
            Help:
              "The additional siren is creating a different acoustic signal differentiate from the smoke alarm. This sound is partly on and partly off. This parameter defines the total length of the interval in seconds.",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Siren alarm tone length",
            max: "99",
            min: "1",
            size: "1",
            type: "byte",
            value: "8",
            Help:
              "The additional siren is creating a different acoustic signal differentiate from the smoke alarm. This sound is partly on and partly off. This parameter defines the total length of the sound versus silence within this interval. Please make sure this value is always smaller (shorter time) than parameter 1 that defines the whole sequence.",
          },
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
            num_groups: "3",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "10" },
              { index: "2", label: "Alarm Reports", max_associations: "10" },
              {
                index: "3",
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
