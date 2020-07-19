import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 9,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010E:0002:0008",
            name: "OzwInfoPage",
          },
          { text: "images/polycontrol/doorlock.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1855/",
            id: "0002",
            name: "ZWProductPage",
            type: "0008",
          },
          {
            text: "Danalock V2 BTZJ",
            id: "0002",
            name: "Identifier",
            type: "0008",
          },
          {
            text:
              "To remove or exclude the danalock into a Z-Wave network\nSet the controller in exclusion mode\nTouch the User Button until you hear two beeps.",
            name: "ExclusionDescription",
          },
          {
            text:
              "To add or include the danalock into a Z-Wave network\nSet the controller in inclusion mode\nTouch the User Button until you hear two beeps.",
            name: "InclusionDescription",
          },
          {
            text:
              "The danalock can be set to factory settings by holding the User Button for ten beeps. Please use this procedure only when the primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          { text: "Danalock V2 BTZJ", name: "Name" },
          {
            text:
              "U.S. / Canada / Mexico / CEPT (Europe) / U.S. / Canada / Mexico / U.S. / Canada / Mexico / U.S. / Canada / Mexico / Japan",
            id: "0002",
            name: "FrequencyName",
            type: "0008",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1855/Danalock_V2_Product_manual_Z_Wave_V_1.0.4.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Z-Wave Controlled door lock with keypad, and Bluetooth Smart.\nOperated by Z-Wave.\nConnect Danalock to your Z-Wave gateway -  Danalock interfaces with your existing Z-Wave network through the Danalock smartphone app.\nOperate Danalock remotely by accessing your Z-Wave network from anywhere in the world with internet access.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1238/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1251/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1532/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1764/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 7,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1769/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 8,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1855/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 9,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Direction",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "0=The motor goes clockwise when unlatched; 1= The motor goes counterclockwise when unlatched",
            Item: [
              { label: "Clockwise", value: "0" },
              { label: "Counterclockwise", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Lock Speed",
            max: "5",
            min: "1",
            size: "1",
            type: "list",
            value: "5",
            Help: "Speed (Torque)",
            Item: [
              { label: "Slowest", value: "1" },
              { label: "Slow", value: "2" },
              { label: "Normal", value: "3" },
              { label: "Fast", value: "4" },
              { label: "Fastest", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Lock Mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "0=Stepper motor mode wave drive (Power Saving); 1=Stepper motor mode full drive(Normal)",
            Item: [
              { label: "Wave drive", value: "0" },
              { label: "Full drive", value: "1" },
              { label: "Relay mode", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Lock Turn Degrees",
            max: "100",
            min: "1",
            type: "byte",
            value: "9",
            Help: "Factor 10 turn degree( 1 = degrees, 9 = 90 degres, etc. )",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Auto Latch time",
            max: "60",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "How many seconds from the lock has been unlatched to it automatically close again. If 0 then it's disabled",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Sound",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Disable or enable the beep sound from latch or unlatch operations(",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Battery Type",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Set the type of battery that powers the device. This affect the returned battery state.",
            Item: [
              { label: "3.6V", value: "0" },
              { label: "3.0V", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Battery Alarm Percent",
            max: "100",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "When the battery level is equal to, or under this value, the device will notify with a beep sound after latch or unlatch",
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Turn and Go",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Used if the lock is using a optional rotation sensor. Latch and Go on will turn automatically when manual turn is detected.",
            Item: [
              { label: "Off", value: "0" },
              { label: "On", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Brake and Go Back",
            max: "15",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "\n\t\t\t0 = Disabled. \n\t\t\t1-15 Seconds to brake. \n\t\t\tWhen used the lock will brake for x amount of seconds and then turn 75 degrees back. \n\t\t\tMade for special doors without door lever.(Only when unlatching).",
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Async",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\tUsed if the lock is using an optional rotation sensor. \n\t\t\tWhen async is enabled the lock will auto calibrate if already unlatched and asked to Unlatch again (used for special door locks where the key turn is asynced from the inside nob.)\n\t\t\t",
            Item: [
              { label: "Off", value: "0" },
              { label: "On", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Door lock operation report type",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t0 = Simple supported by all controllers that support door locks. \n\t\t\t1 = Advanced, more specific reports through notification Command Class. \n\t\t\t2 = No Door lock operation reports are sent unsolicited.\n\t\t\t",
            Item: [
              { label: "Simple", value: "0" },
              { label: "Advanced", value: "1" },
              { label: "Nothing", value: "2" },
            ],
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
