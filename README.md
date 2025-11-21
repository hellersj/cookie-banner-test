apicops
===============

<!-- toc -->
* [About](#about)
* [Warning](#warning)
* [Installing](#installing)
* [Requirements](#requirements)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# About
`apicops` is a command line interface to IBM API Connect v10 specifically targeted at Operations teams. It contains commands to check the healthy running of the system as well as some commands to remedy specific problems if encountered.

It is in active development and new versions will be posted here regularly. Please always use the latest version, as it will contain the latest improvements, commands, and any bug fixes.

Please note this has only been tested against IBM API Connect v10.

# Warning

Unless directed by IBM, only run commands that are also described in the Knowledge Center:

https://www.ibm.com/support/knowledgecenter/en/SSMNED_2018/com.ibm.apic.install.doc/capim_apicops_overview.html:


# Installing
Download the latest binary for your operating system from the Releases tab and rename it to be `apicops`. Note that Linux and Mac will require you to run chmod +x on the downloaded file before you can execute it.
Windows OS is NOT supported.

# Requirements
In order to run `apicops` you need to have `kubectl` or something that implements the same CLI as `kubectl`, such as `oc` installed locally. If you aren't using `kubectl` then set the environment variable APICOPS_K8SCLIENT to the name of the Kubernetes client binary, such as `oc`.

If using the openshift client (`oc`) then v4.1.x or greater is required (even if using v3.x openshift cluster).

Then set the `KUBECONFIG` environment variable to point to your kubeconfig file and `apicops` will pick it up from there.

```sh-session
$ export KUBECONFIG=/home/user/my.kubeconfig
$ apicops
```

If running inside an API Connect OVA file then run `apicops` as root (`sudo -i`) and it will automatically pick up the kubeconfig.

## Setting the target namespace

The `default` namespace for the deployment will be targeted by default. If your deployment makes use of an alternative namespace then you will need to set this in the relevant context of your kubeconfig file.
Your can either edit your kubeconfig file directly and add the namespace property with the desired value to the relevant context.
Alternatively you can set the namespace for the current context using the following command (where < namespace > is the value you want to set the namespace to):
```
kubectl config set "contexts."`kubectl config current-context`".namespace" < namespace >
```
You can view all contexts and their configured namespace with the command:
```
kubectl config get-contexts
```

Alternatively, you can pass an argument `-n <your namespace here>` to all `apicops` commands to specify the namespace for your deployment.

# Usage
```sh-session
$ apicops-v10 COMMAND
running command...
$ apicops-v10 (-v|--version|version)
apicops/0.10.1 linux-x64 node-v10.16.3
$ apicops --help [COMMAND]
USAGE
  $ apicops COMMAND
...
```

## Commonly used commands:
1. `apicops-v10 iss`
API Connect uses tasks to do actions such as synchronizing content between API Manager and the Gateways and Portals. When you are diagnosing some problems, it can be useful to determine what the state is of those tasks.

Determining the state of the task can be done by using the apicops services:identify-state command, which identifies the state of any gateway and portal services and returns any associated task IDs that are incomplete.
```
USAGE
  $ apicops services:identify-state

OPTIONS
  -e, --embellish  Output a table per service instead of single lines. In JSON mode beautify the JSON
  -j, --json       Output as raw JSON instead of lines/tables

ALIASES
  $ apicops iss
```

# Commands
Below are the commands that are applicable for the latest version of `apicops` released.  They may not be applicable to older versions of the tool.  We strongly encourage all to use the latest apicops tool at all times.
<!-- commands -->
* [`apicops-v10 appliance-checks:appliance-pre-upgrade`](#apicops-v10-appliance-checksappliance-pre-upgrade)
* [`apicops-v10 catalogs:get CATALOG`](#apicops-v10-catalogsget-catalog)
* [`apicops-v10 catalogs:list`](#apicops-v10-catalogslist)
* [`apicops-v10 certs:gather`](#apicops-v10-certsgather)
* [`apicops-v10 certs:renew-ingress-ca-certs`](#apicops-v10-certsrenew-ingress-ca-certs)
* [`apicops-v10 certs:validate`](#apicops-v10-certsvalidate)
* [`apicops-v10 configsync:check`](#apicops-v10-configsynccheck)
* [`apicops-v10 custom:run SCRIPT [PARAMS]`](#apicops-v10-customrun-script-params)
* [`apicops-v10 debug:info`](#apicops-v10-debuginfo)
* [`apicops-v10 discovery:change-log-level`](#apicops-v10-discoverychange-log-level)
* [`apicops-v10 governance:change-log-level`](#apicops-v10-governancechange-log-level)
* [`apicops-v10 governance:get-rule RULE`](#apicops-v10-governanceget-rule-rule)
* [`apicops-v10 governance:get-ruleset RULESET`](#apicops-v10-governanceget-ruleset-ruleset)
* [`apicops-v10 governance:list-rules`](#apicops-v10-governancelist-rules)
* [`apicops-v10 governance:list-rulesets`](#apicops-v10-governancelist-rulesets)
* [`apicops-v10 help [COMMAND]`](#apicops-v10-help-command)
* [`apicops-v10 logs:analyse`](#apicops-v10-logsanalyse)
* [`apicops-v10 logs:change-log-spec`](#apicops-v10-logschange-log-spec)
* [`apicops-v10 logs:get-log-spec`](#apicops-v10-logsget-log-spec)
* [`apicops-v10 logs:search`](#apicops-v10-logssearch)
* [`apicops-v10 logs:unique-logs`](#apicops-v10-logsunique-logs)
* [`apicops-v10 organisations:get ORG`](#apicops-v10-organisationsget-org)
* [`apicops-v10 organisations:list`](#apicops-v10-organisationslist)
* [`apicops-v10 platform:check-appliance-disk`](#apicops-v10-platformcheck-appliance-disk)
* [`apicops-v10 platform:check-mgmt-disk`](#apicops-v10-platformcheck-mgmt-disk)
* [`apicops-v10 platform:check-portal-disk`](#apicops-v10-platformcheck-portal-disk)
* [`apicops-v10 portal:2dc-net-test`](#apicops-v10-portal2dc-net-test)
* [`apicops-v10 portal:exec`](#apicops-v10-portalexec)
* [`apicops-v10 postgres:pg_dump`](#apicops-v10-postgrespg_dump)
* [`apicops-v10 postgres:pg_dump_all`](#apicops-v10-postgrespg_dump_all)
* [`apicops-v10 postgres:pg_restore RESTORE_FILE`](#apicops-v10-postgrespg_restore-restore_file)
* [`apicops-v10 services:get-configured-gateway GATEWAY`](#apicops-v10-servicesget-configured-gateway-gateway)
* [`apicops-v10 services:get-configured-portal PORTAL`](#apicops-v10-servicesget-configured-portal-portal)
* [`apicops-v10 services:get-gateway GATEWAY`](#apicops-v10-servicesget-gateway-gateway)
* [`apicops-v10 services:identify-state`](#apicops-v10-servicesidentify-state)
* [`apicops-v10 services:list-configured-gateway`](#apicops-v10-serviceslist-configured-gateway)
* [`apicops-v10 services:list-configured-portal`](#apicops-v10-serviceslist-configured-portal)
* [`apicops-v10 services:list-gateways`](#apicops-v10-serviceslist-gateways)
* [`apicops-v10 snapshots:check-subscriptions WEBHOOK_ID`](#apicops-v10-snapshotscheck-subscriptions-webhook_id)
* [`apicops-v10 snapshots:get WEBHOOK_ID`](#apicops-v10-snapshotsget-webhook_id)
* [`apicops-v10 spaces:list`](#apicops-v10-spaceslist)
* [`apicops-v10 system:pre-upgrade-check SUBSYSTEM [INSTANCE]`](#apicops-v10-systempre-upgrade-check-subsystem-instance)
* [`apicops-v10 tables:delete-row TABLE CONDITION`](#apicops-v10-tablesdelete-row-table-condition)
* [`apicops-v10 tables:get-contents [TABLE]`](#apicops-v10-tablesget-contents-table)
* [`apicops-v10 tables:list-sizes [KEYSPACE]`](#apicops-v10-tableslist-sizes-keyspace)
* [`apicops-v10 tables:topology`](#apicops-v10-tablestopology)
* [`apicops-v10 tasks:get TASKID`](#apicops-v10-tasksget-taskid)
* [`apicops-v10 tasks:list`](#apicops-v10-taskslist)
* [`apicops-v10 upgrade:check-postgres-leader`](#apicops-v10-upgradecheck-postgres-leader)
* [`apicops-v10 upgrade:check-pvc`](#apicops-v10-upgradecheck-pvc)
* [`apicops-v10 upgrade:check-subsystem-status [SUBSYSTEM]`](#apicops-v10-upgradecheck-subsystem-status-subsystem)
* [`apicops-v10 upgrade:clean-obsolete-approval-tasks`](#apicops-v10-upgradeclean-obsolete-approval-tasks)
* [`apicops-v10 upgrade:detect-invalid-encrypt-decrypt`](#apicops-v10-upgradedetect-invalid-encrypt-decrypt)
* [`apicops-v10 upgrade:detect-invalid-gateway-extensions`](#apicops-v10-upgradedetect-invalid-gateway-extensions)
* [`apicops-v10 upgrade:detect-invalid-oauth-apis`](#apicops-v10-upgradedetect-invalid-oauth-apis)
* [`apicops-v10 upgrade:pg-health-check`](#apicops-v10-upgradepg-health-check)
* [`apicops-v10 upgrade:stale-certs`](#apicops-v10-upgradestale-certs)
* [`apicops-v10 version:check-install`](#apicops-v10-versioncheck-install)
* [`apicops-v10 version:delete-external-events`](#apicops-v10-versiondelete-external-events)
* [`apicops-v10 version:post-upgrade`](#apicops-v10-versionpost-upgrade)
* [`apicops-v10 version:pre-upgrade`](#apicops-v10-versionpre-upgrade)
* [`apicops-v10 version:version`](#apicops-v10-versionversion)
* [`apicops-v10 webhook-subscriptions:list`](#apicops-v10-webhook-subscriptionslist)
* [`apicops-v10 webhook-subscriptions:update`](#apicops-v10-webhook-subscriptionsupdate)

## `apicops-v10 appliance-checks:appliance-pre-upgrade`

(appliance-pre-upgrade) Appliance specific script to run before upgrade to do some checks

```
USAGE
  $ apicops-v10 appliance-checks:appliance-pre-upgrade [-n <value>] [-k <value>] [-P <value>] [--logfile <value>]
  [--system]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (appliance-pre-upgrade) Appliance specific script to run before upgrade to do some checks

EXAMPLES
  $ apicops appliance-checks:appliance-pre-upgrade                                 # Run appliance-pre-upgrade script
```

_See code: [src/commands/appliance-checks/appliance-pre-upgrade.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/appliance-checks/appliance-pre-upgrade.js)_

## `apicops-v10 catalogs:get CATALOG`

(cat) Looks up a specific catalog based on UUID or name

```
USAGE
  $ apicops-v10 catalogs:get CATALOG [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

ARGUMENTS
  CATALOG  The ID or name of the catalog

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (cat) Looks up a specific catalog based on UUID or name

EXAMPLES
  $ apicops-v10 cat 4eab42d5-6ba8-4e68-ac87-44ff229db677          # Get a catalog by UUID

  $ apicops-v10 cat cbd062ad-f04c-44cd-afae-dd6a9247309c:sandbox  # Get a catalog using the org UUID and catalog name

  $ apicops-v10 catalogs:get myuniqueorg/stuff                    # Get a catalog using the org name and catalog name

  $ apicops-v10 catalogs:get myuniquecat                          # Get a catalog using the unique catalog name

  $ apicops-v10 catalogs:get sandbox                              # Get all catalogs named sandbox
```

_See code: [src/commands/catalogs/get.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/catalogs/get.js)_

## `apicops-v10 catalogs:list`

(cats) Lists all catalogs

```
USAGE
  $ apicops-v10 catalogs:list [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (cats) Lists all catalogs

EXAMPLES
  $ apicops-v10 catalogs:list  # List all catalogs

  $ apicops-v10 cats           # List all catalogs
```

_See code: [src/commands/catalogs/list.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/catalogs/list.js)_

## `apicops-v10 certs:gather`

(gather) Run gather to store all certificates (securely without their key) used for debugging purposes.

```
USAGE
  $ apicops-v10 certs:gather [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (gather) Run gather to store all certificates (securely without their key) used for debugging purposes.

EXAMPLES
  $ apicops-v10 certs:gather             # Gather certificates

  $ apicops-v10 certs:gather -n apic     # Gather certificates on the namespace called apic
```

_See code: [src/commands/certs/gather.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/certs/gather.js)_

## `apicops-v10 certs:renew-ingress-ca-certs`

(renew-ingress-ca-certs) Renew all the ingress ca certs after updating the ingress-ca expiry and restart the effected deployments.

```
USAGE
  $ apicops-v10 certs:renew-ingress-ca-certs [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (renew-ingress-ca-certs) Renew all the ingress ca certs after updating the ingress-ca expiry and restart the effected
  deployments.

EXAMPLES
  $ apicops-v10 certs:renew-ingress-ca-certs                  # Renews the ingress ca certs based on the updated expirey then restarts the effected deployments.

  $ apicops-v10 certs:renew-ingress-ca-certs --namespace <ns>
```

_See code: [src/commands/certs/renew-ingress-ca-certs.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/certs/renew-ingress-ca-certs.js)_

## `apicops-v10 certs:validate`

(validate) Run validate to identify which certificates and/or secrets are invalid.

```
USAGE
  $ apicops-v10 certs:validate -s <value> [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system] [-i
    <value>] [-m <value>] [-c <value>] [-o <value>]

FLAGS
  -P, --podName=<value>         Specify Pod to use
  -c, --compareFiles=<value>    Compare against provided comma-separated tgz files (useful when comparing
                                multi-namespace or two data center deployments)
  -i, --issuerCertFile=<value>  ingress CA certificate file i.e. The certificate that signed the ingress certificates
                                for this deployment. Only use if you have 1 ingress CA for all of your ingresses.
  -k, --kubeconfig=<value>      The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may
                                have set)
  -m, --multiSiteMode=<value>   Set for a two data center deployment (one of [active, passive])
  -n, --namespace=<value>       The kubernetes namespace to target (this will override any namespace you may have set in
                                your kubeconfig)
  -o, --outputFileName=<value>  Name of output file tgz for comparing information (default =
                                certs-validate-YYYYMMDD-HHMMSS.tgz)
  -s, --subsystem=<value>       (required) Subsystem to validate (one or more of: [management, portal, gateway,
                                analytics, all])
      --logfile=<value>         Log file
      --system                  Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (validate) Run validate to identify which certificates and/or secrets are invalid.

EXAMPLES
  $ apicops-v10 certs:validate -s management -o mgmt.tgz                                         # Validate management certificates and store comparable information to file mgmt.tgz

  $ apicops-v10 certs:validate -s all                                                            # Validate certificates for all subsystems including cross-subsystem certificates

  $ apicops-v10 certs:validate -s portal,management                                              # Validate portal and management certificates including their cross-subsystem certificates

  $ apicops-v10 certs:validate -n apic -s analytics                                              # Validate analytics certificates on the given namespace

  $ apicops-v10 certs:validate -i "/tmp/ingress-ca.crt" -s all                                   # Validate ingress certificate were signed by this CA cert file

  $ apicops-v10 certs:validate -s all -m passive -o passive-dc-certs.tgz                         # Validate all certificates within passive DC and store to named tgz

  $ apicops-v10 certs:validate -s all -m active -c passive-dc-certs.tgz -o active-dc-certs.tgz   # Validate all certificates within active DC and compare with the provided passive tgz. Finally store active information to named tgz

  $ apicops-v10 certs:validate -s management -c portal.tgz,analytics.tgz                         # Validate management certificates and compare with subsystems found within the provided tgz files
```

_See code: [src/commands/certs/validate.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/certs/validate.js)_

## `apicops-v10 configsync:check`

Performs checks on ConfigSync cronjobs to see if they have completed successfully.

```
USAGE
  $ apicops-v10 configsync:check

DESCRIPTION
  Performs checks on ConfigSync cronjobs to see if they have completed successfully.
```

_See code: [src/commands/configsync/check.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/configsync/check.js)_

## `apicops-v10 custom:run SCRIPT [PARAMS]`

(runcustom) Runs the provided nodejs script inside the apim pod

```
USAGE
  $ apicops-v10 custom:run SCRIPT [PARAMS] [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

ARGUMENTS
  SCRIPT  The path to the script to execute inside the apim pod
  PARAMS  Any parameters to pass to the script. Separate multiple parameters by a space and enclose all parameters with
          spaces in them with "s

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (runcustom) Runs the provided nodejs script inside the apim pod

EXAMPLES
  $ apicops-v10 custom:run /tmp/myscript.js          # Run a script with no parameters

  $ apicops-v10 custom:run /tmp/myscript.js one two  # Run a script with 2 parameters

  $ apicops-v10 runcustom /tmp/s.js one "param two"  # Run a script with 2 parameters
```

_See code: [src/commands/custom/run.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/custom/run.js)_

## `apicops-v10 debug:info`

(debug-info) Output results of several apicops-v10 commands

```
USAGE
  $ apicops-v10 debug:info [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (debug-info) Output results of several apicops-v10 commands

EXAMPLES
  $ apicops-v10 debug:info       # Get output from following apicops-v10 commands: iss -a, webhook-subscriptions:list, tasks:list, catalogs:list

  $ apicops-v10 debug-info       # Get output from following apicops-v10 commands: iss -a, webhook-subscriptions:list, tasks:list, catalogs:list
```

_See code: [src/commands/debug/info.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/debug/info.js)_

## `apicops-v10 discovery:change-log-level`

(disloglevel) Change logging level for discovery pod logs.

```
USAGE
  $ apicops-v10 discovery:change-log-level [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system] [-v <value>]
    [-s <value>] [-r]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
  -r, --reset               Reset DEBUG env variable to default discovery pod value
  -s, --service=<value>     [default: service] Specify whether the DEBUG env var should be changes for the
                            api-discovery-service (service)
  -v, --value=<value>       Set value of DEBUG env var for discovery pods
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (disloglevel) Change logging level for discovery pod logs.

EXAMPLES
  $ apicops-v10 discovery:change-log-level -s service -v audit,bhendi:error,bhendi:probe,bhendi:flags,bhendi:db,bhendi:sql,bhendi:lib:external:customPermissionHelper,compliance:routes:*,compliance:error      # Change logging level of discovery-service pods.

  $ apicops-v10 disloglevel -r                    # Reset logging level to default discovery pod log level.
```

_See code: [src/commands/discovery/change-log-level.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/discovery/change-log-level.js)_

## `apicops-v10 governance:change-log-level`

(govloglevel) Change logging level for governance pod logs.

```
USAGE
  $ apicops-v10 governance:change-log-level [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system] [-s <value>]
    [-v <value>] [-r]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
  -r, --reset               Reset DEBUG env variable to default governance pod value
  -s, --service=<value>     [default: service] Specify whether the DEBUG env var should be changes for
                            governance-service (service)
  -v, --value=<value>       Set value of DEBUG env var for governance pods
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (govloglevel) Change logging level for governance pod logs.

EXAMPLES
  $ apicops-v10 governance:change-log-level -s service -v audit,bhendi:error,bhendi:probe,bhendi:flags,bhendi:db,bhendi:sql,bhendi:lib:external:customPermissionHelper,compliance:routes:*,compliance:error      # Change logging level of governance-service pods.

  $ apicops-v10 govloglevel -r                    # Reset logging level to default governance pod log level.
```

_See code: [src/commands/governance/change-log-level.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/governance/change-log-level.js)_

## `apicops-v10 governance:get-rule RULE`

(rule) Looks up a specific Rule based on UUID or name

```
USAGE
  $ apicops-v10 governance:get-rule RULE [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

ARGUMENTS
  RULE  The ID or name of the Rule

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (rule) Looks up a specific Rule based on UUID or name

EXAMPLES
  $ apicops-v10 rule 4eab42d5-6ba8-4e68-ac87-44ff229db677                                # Get a Rule by UUID

  $ apicops-v10 rule cbd062ad-f04c-44cd-afae-dd6a9247309c:spectral-oas:info-contact      # Get a Rule using the org UUID, Ruleset name, and Rule name

  $ apicops-v10 governance:get-rule myorg/myruleset/info-contact                         # Get a Rule using the org name, Ruleset name, and Rule name

  $ apicops-v10 governance:get info-contact                                              # Get all Rules using the name info-contact
```

_See code: [src/commands/governance/get-rule.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/governance/get-rule.js)_

## `apicops-v10 governance:get-ruleset RULESET`

(ruleset) Looks up a specific Ruleset based on UUID or name

```
USAGE
  $ apicops-v10 governance:get-ruleset RULESET [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

ARGUMENTS
  RULESET  The ID or name of the Ruleset

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (ruleset) Looks up a specific Ruleset based on UUID or name

EXAMPLES
  $ apicops-v10 ruleset 4eab42d5-6ba8-4e68-ac87-44ff229db677                 # Get a Ruleset by UUID

  $ apicops-v10 ruleset cbd062ad-f04c-44cd-afae-dd6a9247309c:myruleset       # Get a Ruleset using the org UUID and Ruleset name

  $ apicops-v10 governance:get-ruleset myorg/myruleset                       # Get a Ruleset using the org name and Ruleset name

  $ apicops-v10 governance:get-ruleset myruleset                             # Get all Rulesets using the name myruleset
```

_See code: [src/commands/governance/get-ruleset.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/governance/get-ruleset.js)_

## `apicops-v10 governance:list-rules`

(rules) Lists all Rules

```
USAGE
  $ apicops-v10 governance:list-rules [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (rules) Lists all Rules

EXAMPLES
  $ apicops-v10 rules                            # List all Rules

  $ apicops-v10 governance:list-rules            # List all Rules

  $ apicops-v10 governance:list-rules myrule     # List all Rules using the name myrule
```

_See code: [src/commands/governance/list-rules.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/governance/list-rules.js)_

## `apicops-v10 governance:list-rulesets`

(rulesets) Lists all Rulesets

```
USAGE
  $ apicops-v10 governance:list-rulesets [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (rulesets) Lists all Rulesets

EXAMPLES
  $ apicops-v10 rulesets                                 # List all Rulesets

  $ apicops-v10 governance:list-rulesets                 # List all Rulesets

  $ apicops-v10 governance:list-rulesets myruleset       # List all Rulesets using the name myruleset
```

_See code: [src/commands/governance/list-rulesets.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/governance/list-rulesets.js)_

## `apicops-v10 help [COMMAND]`

Display help for apicops-v10.

```
USAGE
  $ apicops-v10 help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for apicops-v10.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `apicops-v10 logs:analyse`

(analyse) Get frequency and count of provided search terms in pod logs

```
USAGE
  $ apicops-v10 logs:analyse -p <value> -S <value> [-n <value>] [-k <value>] [-P <value>] [--logfile <value>]
    [--system] [-c <value>] [-s <value>]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -S, --search=<value>      (required) Search logs for specific criteria. Can cascade searches using '*' between search
                            terms.
  -c, --container=<value>   Retrieve logs from container.
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
  -p, --pod=<value>         (required) Retrieve pod logs from pod (regex).
  -s, --since=<value>       Retrieve K8s pod logs since (e.g. last 2 minutes would be '-s 2m').
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (analyse) Get frequency and count of provided search terms in pod logs

EXAMPLES
  $ apicops-v10 logs:analyse -p apim -s 2m                          # Retrieve frequency and count logs from pods that match regex 'apim' since 2 minutes ago (-s 2m)

  $ apicops-v10 analyse -p postgres-79cf6 -c database -S "PATCH"    # Retrieve frequency and count of logs from pods that match regex 'postgres-79cf6' and container 'database' that contain the term 'PATCH'

  $ apicops-v10 analyse -p apim -S "PATCH*catalog"                  # Retrieve frequency and count of logs from pods that match regex 'apim' and contain the term 'PATCH' and the term 'catalog'. This is equivalent to piping output through '| grep PATCH | grep catalog'
```

_See code: [src/commands/logs/analyse.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/logs/analyse.js)_

## `apicops-v10 logs:change-log-spec`

(changelogspec) Change logging level specification and/or show large objects for apim pod logging. Script requires the username (defaults to 'admin') and password (prompted) for the Cloud Manager.

```
USAGE
  $ apicops-v10 logs:change-log-spec [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system] [-s <value>]
    [-l <value>] [-u <value>]

FLAGS
  -P, --podName=<value>        Specify Pod to use
  -k, --kubeconfig=<value>     The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may
                               have set)
  -l, --large_object=<value>   [default: not_specified] Optional: Show content of large objects (true) or not (false)
  -n, --namespace=<value>      The kubernetes namespace to target (this will override any namespace you may have set in
                               your kubeconfig)
  -s, --specification=<value>  [default: not_specified] Optional: Specification of logging level to be applied to apim
                               pods
  -u, --username=<value>       [default: admin] Cloud Manager admin user name
      --logfile=<value>        Log file
      --system                 Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (changelogspec) Change logging level specification and/or show large objects for apim pod logging. Script requires the
  username (defaults to 'admin') and password (prompted) for the Cloud Manager.

EXAMPLES
  $ apicops-v10 logs:change-log-spec -s audit,bhendi:error,apim:server,apim:error        # Change logging level to -s specification, users default Cloud Manager username of 'admin' and uses the default of 'false' for show large objects in logs

  $ apicops-v10 changelogspec -l true -u cloudmanagerAdminUser  # Change logging level to show large objects, and specify 'cloudmanagerAdminUser' as name of admin user for Cloud Manager.
```

_See code: [src/commands/logs/change-log-spec.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/logs/change-log-spec.js)_

## `apicops-v10 logs:get-log-spec`

(getlogspec) Get the log specification. Script requires the username (defaults to 'admin') and password (prompted) for the Cloud Manager.

```
USAGE
  $ apicops-v10 logs:get-log-spec [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system] [-u <value>]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
  -u, --username=<value>    [default: admin] Cloud Manager admin user name
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (getlogspec) Get the log specification. Script requires the username (defaults to 'admin') and password (prompted) for
  the Cloud Manager.

EXAMPLES
  $ apicops-v10 logs:get-log-spec                         # Get Log Spec using the default Cloud Manager username of 'admin'

  $ apicops-v10 getlogspec  -u cloudmanagerAdminUser      # Get Log Spec using 'cloudmanagerAdminUser' as name of admin user for Cloud Manager.
```

_See code: [src/commands/logs/get-log-spec.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/logs/get-log-spec.js)_

## `apicops-v10 logs:search`

(search) Get logs based on pod name. Can filter retrieved logs by search terms

```
USAGE
  $ apicops-v10 logs:search -p <value> [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system] [-c
    <value>] [-s <value>] [-A <value> -S <value>] [-B <value> ] [-o]

FLAGS
  -A, --after=<value>       Retrieve specified number of lines after a search match
  -B, --before=<value>      Retrieve specified number of lines before a search match
  -P, --podName=<value>     Specify Pod to use
  -S, --search=<value>      Search logs for specific criteria. Can cascade searches using '*' between search terms.
  -c, --container=<value>   Retrieve logs from container.
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
  -o, --ordered             Order/Sort all logs by timestamp
  -p, --pod=<value>         (required) Retrieve pod logs from pod (regex).
  -s, --since=<value>       Retrieve K8s pod logs since (e.g. last 2 minutes would be '-s 2m').
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (search) Get logs based on pod name. Can filter retrieved logs by search terms

EXAMPLES
  $ apicops-v10 logs:search -p apim -s 2m                          # Retrieve logs from pods that match regex 'apim' since 2 minutes ago (-s 2m)

  $ apicops-v10 search -p postgres-79cf6 -c database -S "PATCH"    # Retrieve logs from pods that match regex 'postgres-79cf6' and container 'database' that contain the term 'PATCH'

  $ apicops-v10 search -p apim -S "PATCH*catalog"                  # Retrieve logs from pods that match regex 'apim' and contain the term 'PATCH' and the term 'catalog'. This is equivalent to piping output through '| grep PATCH | grep catalog'

  $ apicops-v10 search -p apim -S "PATCH*catalog" -A 1 -B 1        # Retrieve logs from pods that match regex 'apim' and contain the term 'PATCH' and the term 'catalog'.  Also include 1 line before and 1 line after. This is equivalent to piping output through '| grep -A 1 -B 1 PATCH | grep -A 1 -B 1 catalog'
```

_See code: [src/commands/logs/search.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/logs/search.js)_

## `apicops-v10 logs:unique-logs`

(uniqueLogs) Get frequency and count each unique line in pod logs

```
USAGE
  $ apicops-v10 logs:unique-logs [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system] [-p <value>]
    [-c <value>] [-s <value>] [-S <value>] [-m <value>] [-l <value>]

FLAGS
  -P, --podName=<value>         Specify Pod to use
  -S, --search=<value>          [default: :error] Search logs for specific criteria. Can cascade searches using '*'
                                between search terms.
  -c, --container=<value>       Retrieve logs from container.
  -k, --kubeconfig=<value>      The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may
                                have set)
  -l, --limit_outputs=<value>   [default: ALL] Limit the output the the first few most common logs.
  -m, --min_occurences=<value>  Minimum number of occurences of term to search for.
  -n, --namespace=<value>       The kubernetes namespace to target (this will override any namespace you may have set in
                                your kubeconfig)
  -p, --pod=<value>             [default: apim] Retrieve pod logs from pod (regex).
  -s, --since=<value>           Retrieve K8s pod logs since (e.g. last 2 minutes would be '-s 2m').
      --logfile=<value>         Log file
      --system                  Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (uniqueLogs) Get frequency and count each unique line in pod logs

EXAMPLES
  $ apicops logs:unique-logs -p apim -s 2m                          # Retrieve frequency and count of unique logs from pods that match regex 'apim' since 2 minutes ago (-s 2m)

  $ apicops uniqueLogs -p apim -S "PATCH*catalog"                   # Retrieve frequency and count of unique logs from pods that match regex 'apim' and contain the term 'PATCH' and the term 'catalog'. This is equivalent to piping output through '| grep PATCH | grep catalog'

  $ apicops uniqueLogs -p apim -l 9                                 # Retrieve frequency and count of unique logs from pods that match regex 'apim' only showing the 9 most frequent logs (-l 9)

  $ apicops uniqueLogs -p apim -m 5                                 # Retrieve frequency and count of unique logs from pods that match regex 'apim' only showing logs with at least 5 occurrences (-m 5)
```

_See code: [src/commands/logs/unique-logs.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/logs/unique-logs.js)_

## `apicops-v10 organisations:get ORG`

(org) Looks up a specific organisation based on UUID or name

```
USAGE
  $ apicops-v10 organisations:get ORG [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

ARGUMENTS
  ORG  The ID or name of the org

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (org) Looks up a specific organisation based on UUID or name

EXAMPLES
  $ apicops-v10 org 4eab42d5-6ba8-4e68-ac87-44ff229db677  # Get an organisation by UUID

  $ apicops-v10 organisations:get myuniqueorg             # Get an organisation using the unique organisation name

  $ apicops-v10 organisations:get org1                    # Get all organisations named org1
```

_See code: [src/commands/organisations/get.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/organisations/get.js)_

## `apicops-v10 organisations:list`

(orgs) Lists all organisations

```
USAGE
  $ apicops-v10 organisations:list [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (orgs) Lists all organisations

EXAMPLES
  $ apicops-v10 organisations:list  # List all organisations

  $ apicops-v10 orgs                # List all organisations
```

_See code: [src/commands/organisations/list.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/organisations/list.js)_

## `apicops-v10 platform:check-appliance-disk`

(check-appliance-disk) Checks appliance disk space. (local-storage only)

```
USAGE
  $ apicops-v10 platform:check-appliance-disk [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (check-appliance-disk) Checks appliance disk space. (local-storage only)

EXAMPLES
  $ apicops-v10 check-appliance-disk              # Check appliance disk space. (local-storage only)
```

_See code: [src/commands/platform/check-appliance-disk.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/platform/check-appliance-disk.js)_

## `apicops-v10 platform:check-mgmt-disk`

(check-mgmt-disk) checks disk space in postgres pods

```
USAGE
  $ apicops-v10 platform:check-mgmt-disk [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (check-mgmt-disk) checks disk space in postgres pods

EXAMPLES
  $ apicops-v10 check-mgmt-disk              # Check disk space in postgres pods.

  $ apicops-v10 check-mgmt-disk -n apic      # Check disk space in postgres pods in a namespace.
```

_See code: [src/commands/platform/check-mgmt-disk.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/platform/check-mgmt-disk.js)_

## `apicops-v10 platform:check-portal-disk`

(check-portal-disk) runs check-portal-disk script against Portal pods

```
USAGE
  $ apicops-v10 platform:check-portal-disk [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system] [-v]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
  -v, --verbose             Specifies verbose mode for check-portal-disk script on Portal pods.
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (check-portal-disk) runs check-portal-disk script against Portal pods

EXAMPLES
  $ apicops-v10 check-portal-disk              # Get output from check-portal-disk script on Portal pods.

  $ apicops-v10 check-portal-disk -v           # Get verbose output from check-portal-disk script on Portal pods.

  $ apicops-v10 check-portal-disk -n apic      # Get output from check-portal-disk script on Portal pods in a namespace.

  $ apicops-v10 check-portal-disk -n apic -v   # Get verbose output from check-portal-disk script on Portal pods in a namespace.
```

_See code: [src/commands/platform/check-portal-disk.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/platform/check-portal-disk.js)_

## `apicops-v10 portal:2dc-net-test`

Enable users of 2DCHA environments to test the connections between the DCs  for debugging networking issues.

```
USAGE
  $ apicops-v10 portal:2dc-net-test [-n <value>] [-k <value>] [-p <value>] [--logfile <value>] [--system] [-l <value>]
    [-d]

FLAGS
  -d, --details             Gives more useful ouput.
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -l, --listener=<value>    [default: true] Specify if a listener socat session should be opened inside the DB pod.
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
  -p, --podName=<value>     [default: db-0] Pod name (regex), Portal-db-0 is chosen as a default pod.
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  Enable users of 2DCHA environments to test the connections between the DCs  for debugging networking issues.

EXAMPLES
  $ apicops-v10 portal:2dc-net-test                       # Open a socat session as listener

  $ apicops-v10 portal:2dc-net-test -l false              # Open a socat session to connect to the listiner
```

_See code: [src/commands/portal/2dc-net-test.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/portal/2dc-net-test.js)_

## `apicops-v10 portal:exec`

Enable users to run command and scripts inside the portal pods.

```
USAGE
  $ apicops-v10 portal:exec -C <value> [-n <value>] [-k <value>] [-p <value>] [--logfile <value>] [--system] [-c
    <value>]

FLAGS
  -C, --command=<value>     (required) The command to be executed inside a container in a pod. eg status
  -c, --container=<value>   [default: admin] Container name. The admin container is chosen as default
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
  -p, --podName=<value>     [default: www-0] Pod name (regex), www-0 is chosen as a default pod.
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  Enable users to run command and scripts inside the portal pods.

EXAMPLES
  $ apicops-v10 portal:exec -C "list_sites"        # Listing all sites
```

_See code: [src/commands/portal/exec.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/portal/exec.js)_

## `apicops-v10 postgres:pg_dump`

(pg_dump) Run 'pg_dump' against postgres pod.

```
USAGE
  $ apicops-v10 postgres:pg_dump [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system] [-a] [-b] [-t
    <value>...] [-T <value>...] [-v] [-F p|t|c] [-f <value>] [-d <value>] [-e <value>] [--export-encryption-key <value>]

FLAGS
  -F, --format=<option>                Format to output. 'p' = plain-text SQL (not compatible with pg_restore), 't' =
                                       tar archive suitable for 'pg_restore', 'c' = custom archive suitable for input
                                       into 'pg_restore'.
                                       <options: p|t|c>
  -P, --podName=<value>                Specify Pod to use
  -T, --excludeTable=<value>...        Do not dump any tables matching the table pattern. The pattern is interpreted
                                       according to the same rules as for -t.
  -a, --dataOnly                       Dump only the data, not the schema (data definitions)
  -b, --blobs                          Include large objects in the dump. This is the default behavior except when
                                       --table is specified, so the -b switch is only useful to add large objects to
                                       selective dumps.
  -d, --database=<value>               [default: apim] Specify the database to use.
  -e, --export=<value>                 Export for AMU
  -f, --file=<value>                   Send output to the specified file. If this is omitted, the standard output is
                                       used..
  -k, --kubeconfig=<value>             The KUBECONFIG to use (this will override any KUBECONFIG environment variable you
                                       may have set)
  -n, --namespace=<value>              The kubernetes namespace to target (this will override any namespace you may have
                                       set in your kubeconfig)
  -t, --table=<value>...               Dump only tables (or views or sequences or foreign tables) matching table. The
                                       table parameter is interpreted as a pattern according to the same rules used by
                                       psql's \d commands
  -v, --verbose                        Specifies verbose mode. This will cause pg_dump to output detailed object
                                       comments and start/stop times to the dump file, and progress messages to standard
                                       error.
      --export-encryption-key=<value>  Export management encryption key for AMU
      --logfile=<value>                Log file
      --system                         Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (pg_dump) Run 'pg_dump' against postgres pod.

EXAMPLES
  $ apicops-v10 pg_dump -F t -f <db_file>  # Dump all data from default dB (apim) to Format t (tar) into file <db_file> that can be used with `pg_restore`

  $ apicops-v10 pg_dump -d lur -F t -f <db_file>  # Dump all data from default dB lur to Format t (tar) into file <db_file> that can be used with `pg_restore`

  $ apicops-v10 postgres:pg_dump           # Dump all table content for the given database to terminal

  $ apicops-v10 pg_dump -a -b              # Dump only the data (-a), and blob content (-b) of all table for the given database

  $ apicops-v10 pg_dump -a -t task_queue   # Dump only the data (-a) for the specified table that matches 'task_queue' for the given database

  $ apicops-v10 pg_dump -t db_user -d lur  # Dump all table content for table that matches 'db_user' for the database 'lur'

  $ apicops-v10 pg_dump -v -T task_queue   # Verbosely dump all content from given database except the tables that match pattern 'task_queue'
```

_See code: [src/commands/postgres/pg_dump.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/postgres/pg_dump.js)_

## `apicops-v10 postgres:pg_dump_all`

(pg_dump_all) does a 'pg_dump' of apim, lur, and compliance databases. Three .sql files (apim.sql, lur.sql, and compliance.sql) are created in your local directory.

```
USAGE
  $ apicops-v10 postgres:pg_dump_all [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (pg_dump_all) does a 'pg_dump' of apim, lur, and compliance databases. Three .sql files (apim.sql, lur.sql, and
  compliance.sql) are created in your local directory.

EXAMPLES
  $ apicops-v10 pg_dump_all              # Dump all data from apim, lur, and compliance DBs into 3 local files, apim.sql, lur.sql, and compliance.sql.

  $ apicops-v10 pg_dump_all -n apic      # Dump all data from apim, lur, and compliance DBs from the namespace 'apic' into 3 local files, apim.sql, lur.sql, and compliance.sql.
```

_See code: [src/commands/postgres/pg_dump_all.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/postgres/pg_dump_all.js)_

## `apicops-v10 postgres:pg_restore RESTORE_FILE`

(pg_restore) Run 'pg_restore' against postgres pod.

```
USAGE
  $ apicops-v10 postgres:pg_restore RESTORE_FILE [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]
    [-a] [-c] [-C] [-t <value>...] [-v] [-d <value>] [-p]

ARGUMENTS
  RESTORE_FILE  The local filename to restore to dB

FLAGS
  -C, --create              Create the database before restoring into it. (When this option is used, the database named
                            with -d is used only to issue the initial CREATE DATABASE command. All data is restored into
                            the database name that appears in the archive.)
  -P, --podName=<value>     Specify Pod to use
  -a, --dataOnly            Restore only the data, not the schema (data definitions)
  -c, --clean               Clean (drop) database objects before recreating them.
  -d, --database=<value>    [default: apim] Specify the database to use. Connect to this database and restore directly
                            into the database
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
  -p, --patch               Patch pg_restore file to add 'public' before certain functions
  -t, --table=<value>...    Restore definition and/or data of named table only.
  -v, --verbose             Specifies verbose mode.
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (pg_restore) Run 'pg_restore' against postgres pod.

EXAMPLES
  Note: all mentions of <dBfile> in examples below refer a file that was generated using the tar (-F t) or custom (-F c) format using pg_dump

  $ apicops-v10 postgres:pg_restore <dBfile>  # Restore <dBfile> to default db (apim).

  $ apicops-v10 pg_restore -d lur <dBfile>    # Restore <dBfile> to lur dB.

  $ apicops-v10 pg_restore -p <dBfile> -v     # Restore <dBfile>, and perform 'public' patch on backup to be restored. Verbose output
```

_See code: [src/commands/postgres/pg_restore.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/postgres/pg_restore.js)_

## `apicops-v10 services:get-configured-gateway GATEWAY`

(configuredgateway) Looks up a specific configured gateway service based on UUID or name with an optional org/catalog/ in front of the name/UUID

```
USAGE
  $ apicops-v10 services:get-configured-gateway GATEWAY [-n <value>] [-k <value>] [-P <value>] [--logfile <value>]
  [--system]

ARGUMENTS
  GATEWAY  The ID or name of the configured gateway service

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (configuredgateway) Looks up a specific configured gateway service based on UUID or name with an optional org/catalog/
  in front of the name/UUID

EXAMPLES
  $ apicops-v10 services:get-configured-gateway gateway-1                             # Gets all the configured gateways with name gateway-1

  $ apicops-v10 configuredgateway myuniqueorg:cat:gateway-1                           # Gets all the configured gateways with name gateway-1 in catalog cat in organisation myuniqueorg

  $ apicops-v10 configuredgateway cbd062ad-f04c-44cd-afae-dd6a9247309c/gateway-1      # Gets all the configured gateways with name gateway-1 in catalog with the UUID specified

  $ apicops-v10 services:get-configured-gateway 740caa86-0c4e-4531-a460-3fb70890726e  # Gets the configured gateway with the UUID specified
```

_See code: [src/commands/services/get-configured-gateway.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/services/get-configured-gateway.js)_

## `apicops-v10 services:get-configured-portal PORTAL`

(configuredportal) Looks up a specific configured portal service based on UUID or name with an optional org/catalog/ in front of the name/UUID

```
USAGE
  $ apicops-v10 services:get-configured-portal PORTAL [-n <value>] [-k <value>] [-P <value>] [--logfile <value>]
  [--system]

ARGUMENTS
  PORTAL  The ID or name of the configured portal service

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (configuredportal) Looks up a specific configured portal service based on UUID or name with an optional org/catalog/
  in front of the name/UUID

EXAMPLES
  $ apicops-v10 services:get-configured-portal portal-1                              # Gets all the configured portals with name portal-1

  $ apicops-v10 configuredportal myuniqueorg:cat:portal-1                            # Gets all the configured portals with name portal-1 in catalog cat in organisation myuniqueorg

  $ apicops-v10 configuredportal cbd062ad-f04c-44cd-afae-dd6a9247309c/portal-1       # Gets all the configured portals with name portal-1 in catalog with the UUID specified

  $ apicops-v10 services:get-configured-portal 740caa86-0c4e-4531-a460-3fb70890726e  # Gets the configured portal with the UUID specified
```

_See code: [src/commands/services/get-configured-portal.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/services/get-configured-portal.js)_

## `apicops-v10 services:get-gateway GATEWAY`

(gateway) Looks up a specific gateway service based on UUID or name

```
USAGE
  $ apicops-v10 services:get-gateway GATEWAY [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

ARGUMENTS
  GATEWAY  The ID or name of the gateway service

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (gateway) Looks up a specific gateway service based on UUID or name

EXAMPLES
  $ apicops-v10 services:get-gateway gateway-1                # Gets the gateway with name gateway-1

  $ apicops-v10 gateway 740caa86-0c4e-4531-a460-3fb70890726e  # Gets the gateway with the UUID specified
```

_See code: [src/commands/services/get-gateway.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/services/get-gateway.js)_

## `apicops-v10 services:identify-state`

(iss) Identifies the state of any gateway and portal services and returns any associated task IDs that are incomplete. Can output compact or beautified and text or JSON

```
USAGE
  $ apicops-v10 services:identify-state [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system] [-e] [-j] [-w
    <value>] [-a]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -a, --allWebhooks         Identify the state of gateway and portal services and display data for all identified
                            webhook ids (-e -j -c have no effect when used with this)
  -e, --embellish           Output a table per service instead of single lines. In JSON mode beautify the JSON
  -j, --json                Output as raw JSON instead of lines/tables
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
  -w, --webhookId=<value>   The id of the webhook subscription record for the service you want to display information
                            about (-e -j -c have no effect when used with this)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (iss) Identifies the state of any gateway and portal services and returns any associated task IDs that are incomplete.
  Can output compact or beautified and text or JSON

EXAMPLES
  $ apicops-v10 services:identify-state  # Identify the state of gateway and portal services

  $ apicops-v10 iss        # Identify the state of gateway and portal services

  $ apicops-v10 iss -w <webhook id>     # Display data for provided webhook id

  $ apicops-v10 iss -a                  # Identify the state of gateway and portal services and display data for all identified webhook ids
```

_See code: [src/commands/services/identify-state.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/services/identify-state.js)_

## `apicops-v10 services:list-configured-gateway`

(configuredgateways) Lists all configured gateway services

```
USAGE
  $ apicops-v10 services:list-configured-gateway [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (configuredgateways) Lists all configured gateway services

EXAMPLES
  $ apicops-v10 services:list-configured-gateways  # Lists all the configured gateways

  $ apicops-v10 configuredgateways                 # Lists all the configured gateways
```

_See code: [src/commands/services/list-configured-gateway.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/services/list-configured-gateway.js)_

## `apicops-v10 services:list-configured-portal`

(configuredportals) Lists all configured portal services

```
USAGE
  $ apicops-v10 services:list-configured-portal [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (configuredportals) Lists all configured portal services

EXAMPLES
  $ apicops-v10 services:list-configured-portals  # Lists all the configured portals

  $ apicops-v10 configuredportals                 # Lists all the configured portals
```

_See code: [src/commands/services/list-configured-portal.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/services/list-configured-portal.js)_

## `apicops-v10 services:list-gateways`

(gateways) Lists all gateway services

```
USAGE
  $ apicops-v10 services:list-gateways [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (gateways) Lists all gateway services

EXAMPLES
  $ apicops-v10 services:list-gateways  # Lists all the gateways

  $ apicops-v10 gateways                # Lists all the gateways
```

_See code: [src/commands/services/list-gateways.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/services/list-gateways.js)_

## `apicops-v10 snapshots:check-subscriptions WEBHOOK_ID`

(checksubscriptions) check the snapshot subscriptions for a given webhook UUID

```
USAGE
  $ apicops-v10 snapshots:check-subscriptions WEBHOOK_ID [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system] [-m
    <value>]

ARGUMENTS
  WEBHOOK_ID  The Webhook id (UUID format) that you want to check the snapshot of

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -m, --mode=<value>        Mode of the script which can be fix
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (checksubscriptions) check the snapshot subscriptions for a given webhook UUID

EXAMPLES
  $ apicops-v10 snapshots:check-subscriptions 740caa86-0c4e-4531-a460-3fb70890726e  # Check the snapshot subscriptions for the webhook UUID specified

  $ apicops-v10 checksubscriptions 740caa86-0c4e-4531-a460-3fb70890726e -m fix   # Check and create the missing subscriptions in snapshots for the webhook UUID specified
```

_See code: [src/commands/snapshots/check-subscriptions.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/snapshots/check-subscriptions.js)_

## `apicops-v10 snapshots:get WEBHOOK_ID`

(getsnapshot) Get the snapshot for a given webhook UUID

```
USAGE
  $ apicops-v10 snapshots:get WEBHOOK_ID [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system] [-t
    <value>]

ARGUMENTS
  WEBHOOK_ID  The Webhook id (UUID format) that you want to get the snapshot of

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
  -t, --timeout=<value>     [default: 3] Timeout (seconds) to allow all blob results to be printed
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (getsnapshot) Get the snapshot for a given webhook UUID

EXAMPLES
  $ apicops-v10 snapshots:get 740caa86-0c4e-4531-a460-3fb70890726e  # Get a snapshot for the webhook id with the UUID specified

  $ apicops-v10 getsnapshot 740caa86-0c4e-4531-a460-3fb70890726e    # Get a snapshot for the webhook id with the UUID specified
```

_See code: [src/commands/snapshots/get.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/snapshots/get.js)_

## `apicops-v10 spaces:list`

(sps) Lists all spaces

```
USAGE
  $ apicops-v10 spaces:list [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system] [-c <value>]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -c, --catalogId=<value>   [default: ""] The ID or name of the catalog you want to list the spaces within
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (sps) Lists all spaces

EXAMPLES
  $ apicops-v10 sps                                                   # List all spaces

  $ apicops-v10 spaces:list                                           # List all spaces

  $ apicops-v10 spaces:list -c cat1                                   # List all spaces in catalog cat1

  $ apicops-v10 sps --catalogId 745c9bab-e0ba-4d34-a284-aa3a28f77a7b  # List all spaces in the catalog identified by the UUID
```

_See code: [src/commands/spaces/list.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/spaces/list.js)_

## `apicops-v10 system:pre-upgrade-check SUBSYSTEM [INSTANCE]`

Command triggered by the APIConnect operator when an upgrade is initiated.  Performs relevant checks against the given subsystem that must pass in order for the upgrade to proceed.

```
USAGE
  $ apicops-v10 system:pre-upgrade-check SUBSYSTEM [INSTANCE] [-n <value>] [-k <value>] [-P <value>] [--logfile <value>]
    [--system] [-c]

ARGUMENTS
  SUBSYSTEM  (management|portal|analytics|apiccluster) The name of the subsystem being upgraded.
  INSTANCE   Specify the instance name to run checks against a single instance.

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -c, --[no-]iscp4i         Indicates if the command is being run against an API Connect cluster in a CP4I environment.
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  Command triggered by the APIConnect operator when an upgrade is initiated.  Performs relevant checks against the given
  subsystem that must pass in order for the upgrade to proceed.

EXAMPLES
  $ apicops system:pre-upgrade-check management          # Run pre upgrade checks against the management subsystem, initiated by the the system (operator)
```

_See code: [src/commands/system/pre-upgrade-check.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/system/pre-upgrade-check.js)_

## `apicops-v10 tables:delete-row TABLE CONDITION`

(deleterow) Deletes row from a table based on a condition.

```
USAGE
  $ apicops-v10 tables:delete-row TABLE CONDITION [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]
    [--debug]

ARGUMENTS
  TABLE      The keyspace and table to delete row from
  CONDITION  The where clause identifying which row to delete

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --debug               Set this to provide more info if command fails.
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (deleterow) Deletes row from a table based on a condition.

EXAMPLES
  # NOTE: do not put a space between keys and values! ex "key=val"

  $ apicops tables:delete-row lur.org "namespace='a005...:b687...' AND id=cd8ed07a-dfb8-4bd6-bac9-ea3adede7ace"                              # Delete the row matching the condition from lur.org

  $ apicops deleterow apim.webhook "namespace='a005...:b687...' AND id=a0050e90-cf97-4989-961f-97cee80ad4c3"                                 # Delete the row matching the condition from apim.webhook

  $ apicops deleterow apim.catalog_by_ns_name "namespace='a005...:b687...' AND name='c1' AND id=061e7d68-acc1-43f8-9bad-775e01643a0e"    # Delete the row matching the conditions from apim.catalog_by_ns_name
```

_See code: [src/commands/tables/delete-row.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/tables/delete-row.js)_

## `apicops-v10 tables:get-contents [TABLE]`

(tablecontents) Dump out the contents in JSON format for the table specified. If the table is not provided you will be prompted from a list of available tables.

```
USAGE
  $ apicops-v10 tables:get-contents [TABLE] -b [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system] [-e]
    [-t <value>] [-s <value>] [--separate]

ARGUMENTS
  TABLE  The table to list the contents of

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -b, --blob                (required) Do not inflate the blob attribute content
  -e, --embellish           Beautify the JSON
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
  -s, --skip=<value>        Skip tables matching the regex provided
  -t, --timeout=<value>     [default: 3] Timeout (seconds) to allow all results to be printed
      --logfile=<value>     Log file
      --separate            Used with 'get-contents all' to produce separate json files per table bundled in
                            'pgdata.tgz'.
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (tablecontents) Dump out the contents in JSON format for the table specified. If the table is not provided you will be
  prompted from a list of available tables.

EXAMPLES
  $ apicops-v10 tables:get-contents apim.webhook    # Get the contents of the apim.webhook table

  $ apicops-v10 tables:get-contents all             # Get the contents of every table written to a file 'pgdata.out'

  $ apicops-v10 tables:get-contents all --separate  # Get the contents of every table written to a file 'pgdata.out' & separate json files per table in 'pgdata.tgz'.

  $ apicops-v10 tablecontents lur.db_user           # Get the contents of the lur.db_user table

  $ apicops-v10 tablecontents -e lur.db_user        # Get the contents of the lur.db_user table and beautify the JSON

  $ apicops-v10 tablecontents primary_event -b      # Get the contents of the primary_event table, in default dB 'apim', and do not inflate the blob attribute
```

_See code: [src/commands/tables/get-contents.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/tables/get-contents.js)_

## `apicops-v10 tables:list-sizes [KEYSPACE]`

(tablesizes) List the sizes of all tables in the key space given. If no key space is provided you will be prompted from a list of available key spaces.

```
USAGE
  $ apicops-v10 tables:list-sizes [KEYSPACE] [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

ARGUMENTS
  KEYSPACE  (apim|lur|compliance) The keyspace in which to list the table sizes

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (tablesizes) List the sizes of all tables in the key space given. If no key space is provided you will be prompted
  from a list of available key spaces.

EXAMPLES
  $ apicops tables:list-sizes apim # List the sizes of all tables in the apim key space

  $ apicops tablesizes lur         # List the sizes of all tables in the lur key space
```

_See code: [src/commands/tables/list-sizes.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/tables/list-sizes.js)_

## `apicops-v10 tables:topology`

(topology) Get the Topology for the deployment

```
USAGE
  $ apicops-v10 tables:topology -u <value> [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system] [-d]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -d, --debug               Output debug
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
  -u, --username=<value>    (required) [default: admin] Cloud Manager admin user name
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (topology) Get the Topology for the deployment

EXAMPLES
  $ apicops tables:topology          # Get the Topology for the deployment using default Cloud Admin user 'admin'.

  $ apicops topology -u newadmin     # Get the Topology for the deployment using Cloud Admin user 'newadmin'
```

_See code: [src/commands/tables/topology.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/tables/topology.js)_

## `apicops-v10 tasks:get TASKID`

(gettask) Dumps out the task identified by taskId

```
USAGE
  $ apicops-v10 tasks:get TASKID [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

ARGUMENTS
  TASKID  The ID of the task to show

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (gettask) Dumps out the task identified by taskId

EXAMPLES
  $ apicops-v10 gettask 4eab42d5-6ba8-4e68-ac87-44ff229db677    # Get a task by UUID

  $ apicops-v10 tasks:get 4eab42d5-6ba8-4e68-ac87-44ff229db677  # Get a task by UUID
```

_See code: [src/commands/tasks/get.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/tasks/get.js)_

## `apicops-v10 tasks:list`

( Lists all tasks )

```
USAGE
  $ apicops-v10 tasks:list [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  ( Lists all tasks )

EXAMPLES
  $ apicops-v10 tasks:list  # List all tasks
```

_See code: [src/commands/tasks/list.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/tasks/list.js)_

## `apicops-v10 upgrade:check-postgres-leader`

(check-postgres-leader) Run Check Postgres Leader to validate original postgres leader is the current leader.

```
USAGE
  $ apicops-v10 upgrade:check-postgres-leader [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]
  [--json]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --json                output in json format
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (check-postgres-leader) Run Check Postgres Leader to validate original postgres leader is the current leader.

EXAMPLES
  $ apicops-v10 upgrade:check-postgres-leader                 # Run Check Postgres Leader to validate original postgres leader is the current leader.

  $ apicops-v10 upgrade:check-postgres-leader -n dev          # Run Check Postgres Leader against any namespace

  $ apicops-v10 upgrade:check-postgres-leader --json         # Run Check Postgres Leader and output as json format
```

_See code: [src/commands/upgrade/check-postgres-leader.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/upgrade/check-postgres-leader.js)_

## `apicops-v10 upgrade:check-pvc`

(check-pvc) Run Check PVC to validate all the PVCs are mounted.

```
USAGE
  $ apicops-v10 upgrade:check-pvc [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (check-pvc) Run Check PVC to validate all the PVCs are mounted.

EXAMPLES
  $ apicops-v10 upgrade:check-pvc                 # Run Check PVC to validate all the PVCs are mounted

  $ apicops-v10 upgrade:check-pvc -n dev          # Run Check PVC against any namespace
```

_See code: [src/commands/upgrade/check-pvc.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/upgrade/check-pvc.js)_

## `apicops-v10 upgrade:check-subsystem-status [SUBSYSTEM]`

(check-subsystem-status) checks each subsystem status is 'Running'

```
USAGE
  $ apicops-v10 upgrade:check-subsystem-status [SUBSYSTEM] [-n <value>] [-k <value>] [-P <value>] [--logfile <value>]
  [--system]

ARGUMENTS
  SUBSYSTEM  The name of a subsystem. E.g. Management, Portal, Analytics, Gateway

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (check-subsystem-status) checks each subsystem status is 'Running'

EXAMPLES
  $ apicops-v10 upgrade:check-subsystem-status                     # Run subsystem-status.

  $ apicops-v10 upgrade:check-subsystem-status -n apic             # Run subsystem-status with namespace.

  $ apicops-v10 upgrade:check-subsystem-status Management          # Run subsystem-status to check a specific subsystem. E.g Management

  $ apicops-v10 upgrade:check-subsystem-status a7s                 # Run subsystem-status to check a specific subsystem. E.g Analytics

  $ apicops-v10 upgrade:check-subsystem-status -n apic Gateway     # Run subsystem-status with namespace and a specific subsystem. 

  $ apicops-v10 check-subsystems-status                      # Run using alias.
```

_See code: [src/commands/upgrade/check-subsystem-status.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/upgrade/check-subsystem-status.js)_

## `apicops-v10 upgrade:clean-obsolete-approval-tasks`

(clean-obsolete-approval-tasks) Run clean-obsolete-approval-tasks to remove the stale tasks.

```
USAGE
  $ apicops-v10 upgrade:clean-obsolete-approval-tasks [-n <value>] [-k <value>] [-P <value>] [--logfile <value>]
  [--system]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (clean-obsolete-approval-tasks) Run clean-obsolete-approval-tasks to remove the stale tasks.

EXAMPLES
  $ apicops-v10 upgrade:clean-obsolete-approval-tasks                # Run Deletes stale tasks

  $ apicops-v10 upgrade:clean-obsolete-approval-tasks -n dev         # Run Deletes stale tasks against any namespace
```

_See code: [src/commands/upgrade/clean-obsolete-approval-tasks.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/upgrade/clean-obsolete-approval-tasks.js)_

## `apicops-v10 upgrade:detect-invalid-encrypt-decrypt`

(detect-invalid-encrypt-decrypt) Run Detect Invalid entries in tables that might cause upgrade encryption/decryption failure.

```
USAGE
  $ apicops-v10 upgrade:detect-invalid-encrypt-decrypt [-n <value>] [-k <value>] [-P <value>] [--logfile <value>]
  [--system]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (detect-invalid-encrypt-decrypt) Run Detect Invalid entries in tables that might cause upgrade encryption/decryption
  failure.

EXAMPLES
  $ apicops-v10 upgrade:detect-invalid-encrypt-decrypt                # Run Detect Invalid entries in tables that might cause upgrade encryption/decryption failure.

  $ apicops-v10 upgrade:detect-invalid-encrypt-decrypt -n dev          # Run Detect Invalid entries in tables that might cause upgrade encryption/decryption failure against any namespace.
```

_See code: [src/commands/upgrade/detect-invalid-encrypt-decrypt.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/upgrade/detect-invalid-encrypt-decrypt.js)_

## `apicops-v10 upgrade:detect-invalid-gateway-extensions`

(detect-invalid-gateway-extensions) Run Detect Invalid gateway extensions.

```
USAGE
  $ apicops-v10 upgrade:detect-invalid-gateway-extensions [-n <value>] [-k <value>] [-P <value>] [--logfile <value>]
  [--system]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (detect-invalid-gateway-extensions) Run Detect Invalid gateway extensions.

EXAMPLES
  $ apicops-v10 upgrade:detect-invalid-gateway-extensions                 # Run Detect Invalid gateway extensions.

  $ apicops-v10 upgrade:detect-invalid-gateway-extensions -n dev          # Run Detect Invalid gateway extensions against any namespace
```

_See code: [src/commands/upgrade/detect-invalid-gateway-extensions.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/upgrade/detect-invalid-gateway-extensions.js)_

## `apicops-v10 upgrade:detect-invalid-oauth-apis`

(detect-invalid-oauth-apis) Run Detect Invalid OAuth APIs to check for security/securityDefinitions objects in OAuth APIs.

```
USAGE
  $ apicops-v10 upgrade:detect-invalid-oauth-apis [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]
  [-f]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -f, --fix                 Fix invalid oauth providers
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (detect-invalid-oauth-apis) Run Detect Invalid OAuth APIs to check for security/securityDefinitions objects in OAuth
  APIs.

EXAMPLES
  $ apicops-v10 upgrade:detect-invalid-oauth-apis                 # Run Detect Invalid OAuth APIs to check for security and securityDefinitions object in OAuth APIs.

  $ apicops-v10 upgrade:detect-invalid-oauth-apis --fix           # Run Detect Invalid OAuth APIs to check for security and securityDefinitions object in OAuth APIs.

  $ apicops-v10 upgrade:detect-invalid-oauth-apis -n dev          # Run Detect Invalid OAuth APIs against any namespace
```

_See code: [src/commands/upgrade/detect-invalid-oauth-apis.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/upgrade/detect-invalid-oauth-apis.js)_

## `apicops-v10 upgrade:pg-health-check`

(pg-health-check) Run 'pg-health-check' against postgres pod.

```
USAGE
  $ apicops-v10 upgrade:pg-health-check [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]
  [--multisite]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --multisite           Addition multisite debug information
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (pg-health-check) Run 'pg-health-check' against postgres pod.

EXAMPLES
  $ apicops-v10 upgrade:pg-health-check                     # Run Postgres health check

  $ apicops-v10 upgrade:pg-health-check -n apic             # Run Postgres health check with namespace.
```

_See code: [src/commands/upgrade/pg-health-check.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/upgrade/pg-health-check.js)_

## `apicops-v10 upgrade:stale-certs`

(detect-stale-certs) Run stale-certs to identify which secrets are stale.

```
USAGE
  $ apicops-v10 upgrade:stale-certs [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (detect-stale-certs) Run stale-certs to identify which secrets are stale.

EXAMPLES
  $ apicops-v10 upgrade:stale-certs                 # Run Detect stale certs to identify the certs

  $ apicops-v10 upgrade:stale-certs -n dev          # Run Detect stale certs against any namespace
```

_See code: [src/commands/upgrade/stale-certs.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/upgrade/stale-certs.js)_

## `apicops-v10 version:check-install`

(check-install) Script can be run at any time, will check the APIC install.

```
USAGE
  $ apicops-v10 version:check-install [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system] [-u <value>]
    [-t]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
  -t, --[no-]topology       Get Topology info
  -u, --username=<value>    [default: admin] Cloud Manager admin user name
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (check-install) Script can be run at any time, will check the APIC install.

EXAMPLES
  $ apicops version:check-install                                 # Run check-install script
```

_See code: [src/commands/version/check-install.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/version/check-install.js)_

## `apicops-v10 version:delete-external-events`

(delete-external-events) Remove external_events table.

```
USAGE
  $ apicops-v10 version:delete-external-events [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (delete-external-events) Remove external_events table.

EXAMPLES
  $ apicops-v10 version:delete-external-events                 # Remove external_events table
```

_See code: [src/commands/version/delete-external-events.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/version/delete-external-events.js)_

## `apicops-v10 version:post-upgrade`

(postupgrade) Script to run after upgrade to do some checks

```
USAGE
  $ apicops-v10 version:post-upgrade [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system] [-u <value>]
    [-t]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
  -t, --topology            Get Topology info
  -u, --username=<value>    [default: admin] Cloud Manager admin user name
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (postupgrade) Script to run after upgrade to do some checks

EXAMPLES
  $ apicops version:post-upgrade -l output                          # Run post-upgrade script and log output to file 'output.log'
```

_See code: [src/commands/version/post-upgrade.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/version/post-upgrade.js)_

## `apicops-v10 version:pre-upgrade`

(preupgrade) Script to run before upgrade to do some checks

```
USAGE
  $ apicops-v10 version:pre-upgrade [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system] [-u <value>]
    [-t] [-c]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -c, --[no-]iscp4i         Indicates if the command is being run against an API Connect cluster in a CP4I environment.
                            Only checked if the --system flag is present.
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
  -t, --[no-]topology       Get Topology info
  -u, --username=<value>    [default: admin] Cloud Manager admin user name
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (preupgrade) Script to run before upgrade to do some checks

EXAMPLES
  $ apicops version:pre-upgrade                                 # Run pre-upgrade script
```

_See code: [src/commands/version/pre-upgrade.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/version/pre-upgrade.js)_

## `apicops-v10 version:version`

```
USAGE
  $ apicops-v10 version:version
```

_See code: [src/commands/version/version.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/version/version.js)_

## `apicops-v10 webhook-subscriptions:list`

(webhooksubs) Lists all webhook subscriptions

```
USAGE
  $ apicops-v10 webhook-subscriptions:list [-n <value>] [-k <value>] [-P <value>] [--logfile <value>] [--system] [-t
  <value>]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
  -t, --timeout=<value>     [default: 3] Timeout (seconds) to allow all results to be printed
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (webhooksubs) Lists all webhook subscriptions

EXAMPLES
  $ apicops-v10 webhook-subscriptions:list  # List all webhook subscriptions

  $ apicops-v10 webhooksubs                 # List all webhook subscriptions
```

_See code: [src/commands/webhook-subscriptions/list.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/webhook-subscriptions/list.js)_

## `apicops-v10 webhook-subscriptions:update`

(updatewebhook) Update the state of a webhook subscription record

```
USAGE
  $ apicops-v10 webhook-subscriptions:update -w <value> -s online|offline_configured -u <value> [-n <value>] [-k <value>] [-P
    <value>] [--logfile <value>] [--system] [-d]

FLAGS
  -P, --podName=<value>     Specify Pod to use
  -d, --debug               Output debug
  -k, --kubeconfig=<value>  The KUBECONFIG to use (this will override any KUBECONFIG environment variable you may have
                            set)
  -n, --namespace=<value>   The kubernetes namespace to target (this will override any namespace you may have set in
                            your kubeconfig)
  -s, --state=<option>      (required) State you wish to transition too
                            <options: online|offline_configured>
  -u, --username=<value>    (required) [default: admin] Cloud Manager admin user name
  -w, --webhookid=<value>   (required) Webhook Subscription ID you wish to change the state for. Get this from the
                            output of `apicops-v10 iss'
      --logfile=<value>     Log file
      --system              Indicates the command has been triggered by the system (APIC Operator)

DESCRIPTION
  (updatewebhook) Update the state of a webhook subscription record

EXAMPLES
  $ apicops-v10 updatewebhook -w 843d3499-da6b-4acd-a265-3753d7a71668 -s offline_configured  # Update the subscription to offline_configured for the gateway identified by webhook UUID

  $ apicops-v10 webhook-subscriptions:update -w 843d3499-da6b-4acd-a265-3753d7a71668 -s offline_configured  # Update the subscription to offline_configured for the gateway identified by webhook UUID

  where, '-w <Webhook Subscription ID>' can be obtained from the output of 'apicops-v10 iss'
```

_See code: [src/commands/webhook-subscriptions/update.js](https://github.com/velox/apicops/blob/v0.10.80/src/commands/webhook-subscriptions/update.js)_
<!-- commandsstop -->
#   c o o k i e - b a n n e r - t e s t  
 