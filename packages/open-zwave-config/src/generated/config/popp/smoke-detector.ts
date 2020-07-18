import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0154:0201:0100",
            name: "OzwInfoPage",
          },
          { text: "images/popp/smoke-detector.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2111/",
            id: "0201",
            name: "ZWProductPage",
            type: "0100",
          },
          {
            text: "CEPT (Europe)",
            id: "0201",
            name: "FrequencyName",
            type: "0100",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2111/POPE004001_en.pdf",
            name: "ProductManual",
          },
          {
            text:
              "This products consists of a standard photo electric Smoke detector with a pluggable Z-Wave wireless interface module.\nThe Smoke detector will also work as a stand alone product and is certified according to EN 14604. The\nsmoke chamber of the detector has a stainless steel reel with antistatic plastic chamber.\nA button allows on-device test of smoke chamber, electronics and battery. The device also offers a built-in self test and\nan electronic smoke chamber test to avoid the use of test aerosol. A low battery warning will last for 30 days but full\nfunction of the detector is guaranteed during this time.\nThe Z-Wave module allows to report the smoke and low battery alarm wirelessly to a central controller. The detector can\nalso be used as a wireless siren for alarm system or other applications. The wireless module is operated by the 9V battery\nof the smoke detector. An optional external power supply allows external powering the unit.\nAccording to VdS 3515 (Smoke Detectors with Wireless Communication) this device will send alarm signals to all other\nsmoke detectors registered in association group 2 to turn on their siren. This function ensures that all smoke detectors\nwill issue noise if one of them detected a smoke.",
            name: "Description",
          },
          {
            text:
              "To Exclude, hit the little button on the wireless module for 1 second",
            name: "ExclusionDescription",
          },
          { text: "Smoke Detector and Siren", name: "Name" },
          {
            text:
              "To Include, hit the little button on the wireless module for 1 second",
            name: "InclusionDescription",
          },
          {
            text:
              "To reset the device keep the button pushed for 10 seconds. After 5 seconds the led starts flashing and after another 5\nseconds there is a short beep signaling the successful reset back to factory defaults. Use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          { text: "POPE004001", id: "0201", name: "Identifier", type: "0100" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2111/xml",
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
            index: "1",
            instance: "1",
            label: "Siren alarm sequence interval",
            max: "129",
            min: "3",
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
            max: "129",
            min: "3",
            size: "1",
            type: "byte",
            value: "10",
            Help:
              "The additional siren is creating a different acoustic signal differentiate from the smoke alarm. This sound is partly on and partly off. This parameter defines the total length of the sound versus silence within this interval.",
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
            Help: "Value of On-Command",
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
            Help: "Value of Off-Command",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Status of automated meshing of smoke alarms",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This smoke detector can automatically inform other smoke detectors of same type about smoke alarms. They will then also turn on the siren. This function is a requirement of wireless networked smoke detectors.",
            Item: [
              { label: "Inactive", value: "0" },
              { label: "Active (default)", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Status of automated meshing of battery alarms",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This smoke detector can automatically inform other smoke detectors of same type about battery alarms. They will then also turn on the siren. This function is a requirement of wireless networked smoke detectors.",
            Item: [
              { label: "Inactive", value: "0" },
              { label: "Active (default)", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "10" }],
          },
        ],
      },
    ],
  },
};

export default config;
