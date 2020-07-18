import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 11,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0109:0101:2001",
            name: "OzwInfoPage",
          },
          { text: "images/vision/zd2102.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/111/",
            id: "0101",
            name: "ZWProductPage",
            type: "2001",
          },
          { text: "Door Sensor", name: "Name" },
          {
            text: "http://www.visionsecurity.com.tw/ha_contact_us.html",
            name: "ProductSupport",
          },
          { text: "ZD 2102", id: "0101", name: "Identifier", type: "2001" },
          {
            text:
              "http://www.visionsecurity.com.tw/ha_products_page2_154_159.html",
            name: "ProductPage",
          },
          {
            text: "CEPT (Europe) / U.S. / Canada / Mexico",
            id: "0101",
            name: "FrequencyName",
            type: "2001",
          },
          {
            text:
              "The ZD2102-5 Door and Window sensor is used in any Z-Wave network to detect the opening or closing of a door or window.  Special Design can fit most of door/window frame.  The primary sensing element is a magnetic reed switch, the ZD2102-5 is supplied with the sensor, sensor mounting bracket and the trigger magnet.  An additional set of sensor inputs are provided through a 2 position screw terminal and can be used to expand the sensor capability to multiple inputs.  The ZD2102-5 is powered by a single CR123A Lithium Battery (supplied with unit, battery life is more than 5 years) and is intended for indoor use only.   The ZD2102-5 features tamper proof switch, low battery warning and can be firmware updated over the air.",
            name: "Description",
          },
          {
            text: "https://products.z-wavealliance.org/products/779/",
            id: "0102",
            name: "ZWProductPage",
            type: "2001",
          },
          { text: "ZD2102IN", id: "0102", name: "Identifier", type: "2001" },
          {
            text: "CEPT (Europe) / India",
            id: "0102",
            name: "FrequencyName",
            type: "2001",
          },
          {
            text: "https://products.z-wavealliance.org/products/848/",
            id: "0104",
            name: "ZWProductPage",
            type: "2001",
          },
          { text: "Japan", id: "0104", name: "FrequencyName", type: "2001" },
          { text: "ZD2102JP", id: "0104", name: "Identifier", type: "2001" },
          {
            text: "https://products.z-wavealliance.org/products/988/",
            id: "0105",
            name: "ZWProductPage",
            type: "2001",
          },
          {
            text:
              "The ZD2102-5 is forced awake by opening the rear cover, the red LED will stay on and the 2102-5 will stay awake for 10 seconds.  The  ZD2102-5 will send “Wake Up Notification”.  If ZD2102-5 receives a “Wake Up No More Information” command then the red LED will go off and it will go to sleep.\nAuto Wake Up:  The wakeup interval is user settable from 10 minutes to 1 week using COMMAND_CLASS_WAKE_UP, Interval increment is 3 minutes.",
            name: "WakeupDescription",
          },
          {
            text:
              "For “Exclusion” (removing from) a network: Put the Z-Wave™ network controller into “exclusion” mode, following its instructions. To delete the ZD2102-5 from your controller press the program switch of ZD2102-5 for at least 1 second to be excluded.  Note: All user and network settings will be cleared and the device reset to factory setting defaults when the device is excluded.",
            name: "ExclusionDescription",
          },
          {
            text:
              "For “Inclusion” (adding to) a network: Put the Z-Wave™ network controller into “inclusion” mode following its instructions.  To add the ZD2102-5 to your controller press the program switch of ZD2102-5 to send the Node Information Frame (NIF). After sending NIF, the network controller will send the auto inclusion request; otherwise, ZD2102-5 will go to sleep after 15 seconds.",
            name: "InclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0105",
            name: "FrequencyName",
            type: "2001",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2823/ZD 2102-5_R4_20170913 (RED).pdf",
            name: "ProductManual",
          },
          { text: "ZD2102EU-5", id: "0105", name: "Identifier", type: "2001" },
          {
            text:
              "Factory Default Reset: Trigger the rear cover switch to send the Alarm Report and trigger the reed switch (close & open) 5 times in 10 seconds, ZD2102-5 will send the “Device Reset Locally Notification” command and reset to the factory default condition.  Please use this procedure only when the network primary controller is missing or otherwise inoperable!",
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/2823/",
            id: "0106",
            name: "ZWProductPage",
            type: "2001",
          },
          { text: "ZD2102JP-5", id: "0106", name: "Identifier", type: "2001" },
          {
            text: "U.S. / Canada / Mexico / Japan",
            id: "0106",
            name: "FrequencyName",
            type: "2001",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/90/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/111/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/702/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/779/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 7,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/848/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 8,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/988/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 9,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1705/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 10,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2823/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 11,
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
            label: "External Switch",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "External Switch Status",
            Item: [
              { label: "On", value: "255" },
              { label: "Off", value: "0" },
            ],
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      { id: "113", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [
              { index: "1", label: "All Reports", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
