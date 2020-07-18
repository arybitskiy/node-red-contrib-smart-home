import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0090:0541:0003",
            name: "OzwInfoPage",
          },
          { text: "images/kwikset/888.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2176",
            id: "0446",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0446",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "888", id: "0446", name: "Identifier", type: "0003" },
          {
            text:
              "https://www.kwikset.com/products/detail/888-smartcode-electronic-deadbolt-with-z-wave-technology",
            name: "ProductPage",
          },
          {
            text:
              "Extend your smart home system to your current deadbolt, enabling your existing deadbolt to wirelessly communicate with your smart home or security system\nDramatically reduced, all-metal interior\nWorks with existing select single cylinder deadbolts",
            name: "Description",
          },
          {
            text: "http://www.kwikset.com/Customer-Support/Overview.aspx",
            name: "ProductSupport",
          },
          { text: "SmartCode 888", name: "Name" },
          {
            text:
              "The electronic conversion kit remains asleep until an action occurs on the latch or a request is received from the RF side.\nFor the RF side, it will wake up every 1 second to check if there are any requests from your smart home controller.",
            name: "WakeupDescription",
          },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=MarketCertificationFiles/2268/Install_Guide_914C_03_09_2017.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Initiate the process to add the lock to your system at your smart home controller.\nWhen prompted by your smart home system to add the lock, press button “A” on the lock interior one time. The red LED will illuminate when the lock enters Add Mode.\nPlease allow time for the controller to add the lock to your system.",
            name: "InclusionDescription",
          },
          {
            text:
              "Follow your smart home system’s instructions to remove the lock from the network. When prompted by the system, press button A” on the lock interior once.  The red LED will illuminate when the lock enters Remove mode.",
            name: "ExclusionDescription",
          },
          {
            text:
              "A factory reset will delete all user codes associated with the lock and will remove itself from your smart home system.\nPlease only perform a factory reset when the primary controller is missing or inoperable.\n\nTo perform a factory reset, please perform the following:\n1. Remove the battery pack\n2. Press and HOLD the Program button while reinserting the battery pack.\n3. Keep holding the button for 30 seconds until the lock beeps and the status LED flashes red.\n4. Press the Program button once more.  The status LED will flash green and red several times.\n5. After a few seconds, the lock will initiate the door handing process.",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial Version",
                author: "mike240se",
                date: "20 Jun 2020",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "113",
        TriggerRefreshValue: [
          {
            Genre: "user",
            Index: "6",
            Instance: "1",
            RefreshClassValue: [
              {
                CommandClass: "98",
                Index: "1",
                Instance: "1",
                RequestFlags: "0",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
