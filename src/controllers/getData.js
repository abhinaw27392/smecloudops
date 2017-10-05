'use strict';

var Promise = require('Bluebird');
var dataService = require('../services/manipulatedata');

function get_access_key_age(req, res) {
    return dataService.get_access_key_age()
        .then(function(result) {
            res.setHeader('content-type', 'application/json');
            res.send(result);
        }).catch(function(error) {
            res.status(500);
            res.send(error.message);
        });
}

function get_agent_status(req, res) {
    return dataService.get_agent_status()
        .then(function(response) {
            res.setHeader('content-type', 'application/json');
            res.send(response);
        }).catch(function(err) {
            res.status(500);
            res.send(err.message);
        });
}

function get_al_agent(req, res) {
    return dataService.get_al_agent()
        .then(function(response) {
            res.setHeader('content-type', 'application/json');
            res.send(response);
        }).catch(function(err) {
            res.status(500);
            res.send(err.message);
        });
}

function get_ami_aging(req, res) {
    return dataService.get_ami_aging()
        .then(function(result) {

            res.setHeader('content-type', 'application/json');
            res.send(result);
        }).catch(function(err) {
            res.status(500);
            res.send(err.message);
        });
}

function get_ami_audit(req, res) {
    return dataService.get_ami_audit()
        .then(function(result) {
            res.setHeader('content-type', 'application/json');
            res.send(result);

        }).catch(function(err) {
            res.status(500);
            res.send(err.message);
        });
}

function get_ami_cleanup(req, res) {
    return dataService.get_ami_cleanup()
        .then(function(result) {
            res.setHeader('content-type', 'application/json');
            res.send(result);

        }).catch(function(err) {
            res.status(500);
            res.send(err.message);
        });
}

function get_ami_details(req, res) {
    return dataService.get_ami_details()
        .then(function(result) {
            res.setHeader('content-type', 'application/json');
            res.send(result);

        }).catch(function(err) {
            res.status(500);
            res.send(err.message);
        });
}

function get_ami_public(req, res) {
    return dataService.get_ami_public()
        .then(function(result) {
            res.setHeader('content-type', 'application/json');
            res.send(result);

        }).catch(function(err) {
            res.status(500);
            res.send(err.message);
        });
}

function get_ami(req, res) {
    return dataService.get_ami()
        .then(function(result) {
            res.setHeader('content-type', 'application/json');
            res.send(result);

        }).catch(function(err) {
            res.status(500);
            res.send(err.message);
        });
}

function get_backup_script(req, res) {
    return dataService.get_backup_script()
        .then(function(result) {
            res.setHeader('content-type', 'application/json');
            res.send(result);

        }).catch(function(err) {
            res.status(500);
            res.send(err.message);
        });
}

function get_bastion_hosts(req, res) {
    return dataService.get_bastion_hosts()
        .then(function(result) {
            res.send(result);
            // res.send(result);
        })
}

function get_cis_audits(req, res) {
    return dataService.get_cis_audits()
        .then(function(result) {
            res.send(result);

        })
}

function get_cis_script_last_run(req, res) {
    return dataService.get_cis_script_last_run()
        .then(function(result) {
            res.send(result);
        })
}

function get_cloudtrail_status(req, res) {

    return dataService.get_cloudtrail_status()
        .then(function(result) {
            res.send(result);
        })
}

function get_cmdlogin(req, res) {

    return dataService.get_cmdlogin()
        .then(function(result) {
            res.send(result);
        })
}

function get_db_encryption(req, res) {

    return dataService.get_db_encryption()
        .then(function(result) {
            res.send(result);
        })
}

function get_ds_agent(req, res) {

    return dataService.get_ds_agent()
        .then(function(result) {
            res.send(result);
        })
}

function get_ebs_terminate_protect(req, res) {

    return dataService.get_ebs_terminate_protect()
        .then(function(result) {
            res.send(result);
        })
}

function get_ebs(req, res) {

    return dataService.get_ebs()
        .then(function(result) {
            res.send(result);
        })
}

function get_ec2_ebs_optimize(req, res) {

    return dataService.get_ec2_ebs_optimize()
        .then(function(result) {
            res.send(result);
        })
}

function get_ec2_ri(req, res) {

    return dataService.get_ec2_ri()
        .then(function(result) {
            res.send(result);
        })
}

function get_ec2_terminate_protect(req, res) {

    return dataService.get_ec2_terminate_protect()
        .then(function(result) {
            res.send(result);
        })
}

function get_ec2(req, res) {

    return dataService.get_ec2()
        .then(function(result) {
            // console.log(result);
            res.send(result);
        })
}

function get_elasticip(req, res) {

    return dataService.get_elasticip()
        .then(function(result) {
            res.send(result);
        })
}

function get_elb_access_log(req, res) {

    return dataService.get_elb_access_log()
        .then(function(result) {
            res.send(result);
        })
}

function get_elb_with_cipher(req, res) {

    return dataService.get_elb_with_cipher()
        .then(function(result) {
            res.send(result);
        })
}

function get_elb(req, res) {

    return dataService.get_elb()
        .then(function(result) {
            res.send(result);
        })
}

function get_elk(req, res) {

    return dataService.get_elk()
        .then(function(result) {
            res.send(result);
        })
}

function get_execcmd(req, res) {

    return dataService.get_execcmd()
        .then(function(result) {
            res.send(result);
        })
}

function get_graph_implement(req, res) {

    return dataService.get_graph_implement()
        .then(function(result) {
            res.send(result);
        })
}

function get_iam_acc_key(req, res) {

    return dataService.get_iam_acc_key()
        .then(function(result) {
            res.send(result);
        })
}

function get_iam_auth(req, res) {

    return dataService.get_iam_auth()
        .then(function(result) {
            res.send(result);
        })
}

function get_iam_group(req, res) {

    return dataService.get_iam_group()
        .then(function(result) {
            res.send(result);
        })
}

function get_iam_keys_lastused(req, res) {

    return dataService.get_iam_keys_lastused()
        .then(function(result) {
            res.send(result);
        })
}

function get_iam_mfa(req, res) {

    return dataService.get_iam_mfa()
        .then(function(result) {
            res.send(result);
        })
}

function get_iam_pass_policy(req, res) {

    return dataService.get_iam_pass_policy()
        .then(function(result) {
            res.send(result);
        })
}

function get_iam_user_console_pass(req, res) {

    return dataService.get_iam_user_console_pass()
        .then(function(result) {
            console.log(result);
            res.send(result);
        })
}

function get_iam_user(req, res) {

    return dataService.get_iam_user()
        .then(function(result) {

            res.send(result);
        })
}

function get_iamusers_without_mfa(req, res) {

    return dataService.get_iamusers_without_mfa()
        .then(function(result) {
            res.send(result);
        })
}

function get_kms_search(req, res) {

    return dataService.get_kms_search()
        .then(function(result) {
            res.send(result);
        })
}

function get_new_script_last_run(req, res) {

    return dataService.get_new_script_last_run()
        .then(function(result) {
            res.send(result);
        })
}

function get_old_ebs_optimize(req, res) {

    return dataService.get_old_ebs_optimize()
        .then(function(result) {
            res.send(result);
        })
}

function get_profilename(req, res) {

    return dataService.get_profilename()
        .then(function(result) {
            res.send(result);
        })
}

function get_qualys_agent(req, res) {

    return dataService.get_qualys_agent()
        .then(function(result) {
            res.send(result);
        })
}

function get_rds_backup(req, res) {

    return dataService.get_rds_backup()
        .then(function(result) {
            res.send(result);
        })
}

function get_rds_multi_az(req, res) {

    return dataService.get_rds_multi_az()
        .then(function(result) {
            res.send(result);
        })
}

function get_rds(req, res) {

    return dataService.get_rds()
        .then(function(result) {
            res.send(result);
        })
}

function get_redshift(req, res) {

    return dataService.get_redshift()
        .then(function(result) {
            res.send(result);
        })
}

function get_ri_graph(req, res) {

    return dataService.get_ri_graph()
        .then(function(result) {
            res.send(result);
        })
}

function get_routetable(req, res) {

    return dataService.get_routetable()
        .then(function(result) {
            res.send(result);
        })
}

function get_s3_limit_exceed(req, res) {

    return dataService.get_s3_limit_exceed()
        .then(function(result) {
            res.send(result);
        })
}

function get_s3_logging(req, res) {

    return dataService.get_s3_logging()
        .then(function(result) {
            res.send(result);
        })
}

function get_s3_open_public(req, res) {

    return dataService.get_s3_open_public()
        .then(function(result) {
            res.send(result);
        })
}

function get_s3(req, res) {

    return dataService.get_s3()
        .then(function(result) {
            res.send(result);
        })
}

function get_scheduled_events(req, res) {

    return dataService.get_scheduled_events()
        .then(function(result) {
            res.send(result);
        })
}

function get_script_last_run(req, res) {

    return dataService.get_script_last_run()
        .then(function(result) {
            res.send(result);
        })
}

function get_securitygroup(req, res) {

    return dataService.get_securitygroup()
        .then(function(result) {
            res.send(result);
        })
}

function get_snapshot(req, res) {

    return dataService.get_snapshot()
        .then(function(result) {
            res.send(result);
        })
}

function get_ssl_cert(req, res) {

    return dataService.get_ssl_cert()
        .then(function(result) {
            res.send(result);
        })
}

function get_subnet(req, res) {

    return dataService.get_subnet()
        .then(function(result) {
            res.send(result);
        })
}

function get_untagged_resource(req, res) {

    return dataService.get_untagged_resource()
        .then(function(result) {
            res.send(result);
        })
}

function get_unused_ebs(req, res) {

    return dataService.get_unused_ebs()
        .then(function(result) {
            res.send(result);
        })
}

function get_unused_ec2(req, res) {

    return dataService.get_unused_ec2()
        .then(function(result) {
            res.send(result);
        })
}

function get_unused_elasticip(req, res) {

    return dataService.get_unused_elasticip()
        .then(function(result) {
            res.send(result);
        })
}

function get_unused_elb(req, res) {

    return dataService.get_unused_elb()
        .then(function(result) {
            res.send(result);
        })
}

function get_unused_keypair(req, res) {

    return dataService.get_unused_keypair()
        .then(function(result) {
            res.send(result);
        })
}

function get_unused_script_last_run(req, res) {

    return dataService.get_unused_script_last_run()
        .then(function(result) {
            res.send(result);
        })
}

function get_unused_securitygroup(req, res) {

    return dataService.get_unused_securitygroup()
        .then(function(result) {
            res.send(result);
        })
}

function get_unused_snapshot(req, res) {

    return dataService.get_unused_snapshot()
        .then(function(result) {
            res.send(result);
        })
}


function get_user_login(req, res) {

    return dataService.get_user_login()
        .then(function(result) {
            res.send(result);
        })
}


function get_vol_snap_missing(req, res) {

    return dataService.get_vol_snap_missing()
        .then(function(result) {
            res.send(result);
        })
}


function get_vpc_flowlog(req, res) {

    return dataService.get_vpc_flowlog()
        .then(function(result) {
            res.send(result);
        })
}


function get_vpc_peering(req, res) {

    return dataService.get_vpc_peering()
        .then(function(result) {
            res.send(result);
        })
}


function get_vpc(req, res) {

    return dataService.get_vpc()
        .then(function(result) {
            res.send(result);
        })
}


function get_vpn_conditions(req, res) {

    return dataService.get_vpn_conditions()
        .then(function(result) {
            res.send(result);
        })
}

function get_tags_projectcode(req, res) {

    return dataService.get_tags_projectcode()
        .then(function(result) {
            // console.log(result);
            res.send(result);

        })
}

function get_tags_owner(req, res) {

    return dataService.get_tags_owner()
        .then(function(result) {
            // console.log(result);
            res.send(result);

        })
}

function get_tags_businessunit(req, res) {

    return dataService.get_tags_businessunit()
        .then(function(result) {
            // console.log(result);
            res.send(result);

        })
}

function get_iam_unused_users(req, res) {

    return dataService.get_iam_unused_users()
        .then(function(result) {
            // console.log(result);
            res.send(result);

        })
}

function get_open_securitygroup(req, res) {

    return dataService.get_open_securitygroup()
        .then(function(result) {
            // console.log(result);
            res.send(result);

        })
}

function get_user_login(req, res) {

    return dataService.get_user_login(req.body.name, req.body.pword)
        .then(function(result) {
            res.send(result);
        });
}

function get_graph_implement1(req, res) {


    return dataService.get_graph_implement1(req.body.AccName, req.body.RegName)
        .then(function(result) {
            res.send(result);
        })
}




module.exports = {
    "get_access_key_age": Promise.method(get_access_key_age),
    "get_agent_status": Promise.method(get_agent_status),
    "get_al_agent": Promise.method(get_al_agent),
    "get_ami_aging": Promise.method(get_ami_aging),
    "get_ami_audit": Promise.method(get_ami_audit),
    "get_ami_cleanup": Promise.method(get_ami_cleanup),
    "get_ami_details": Promise.method(get_ami_details),
    "get_ami_public": Promise.method(get_ami_public),
    "get_ami": Promise.method(get_ami),
    "get_backup_script": Promise.method(get_backup_script),
    "get_bastion_hosts": Promise.method(get_bastion_hosts),
    "get_cis_audits": Promise.method(get_cis_audits),
    "get_cloudtrail_status": Promise.method(get_cloudtrail_status),
    "get_cmdlogin": Promise.method(get_cmdlogin),
    "get_db_encryption": Promise.method(get_db_encryption),
    "get_ds_agent": Promise.method(get_ds_agent),
    "get_ebs_terminate_protect": Promise.method(get_ebs_terminate_protect),
    "get_ebs": Promise.method(get_ebs),
    "get_ec2_ebs_optimize": Promise.method(get_ec2_ebs_optimize),
    "get_ec2_ri": Promise.method(get_ec2_ri),
    "get_ec2_terminate_protect": Promise.method(get_ec2_terminate_protect),
    "get_ec2": Promise.method(get_ec2),
    "get_elasticip": Promise.method(get_elasticip),
    "get_elb_access_log": Promise.method(get_elb_access_log),
    "get_elb_with_cipher": Promise.method(get_elb_with_cipher),
    "get_elb": Promise.method(get_elb),
    "get_elk": Promise.method(get_elk),
    "get_execcmd": Promise.method(get_execcmd),
    "get_graph_implement": Promise.method(get_graph_implement),
    "get_graph_implement1": Promise.method(get_graph_implement1),
    "get_iam_acc_key": Promise.method(get_iam_acc_key),
    "get_iam_auth": Promise.method(get_iam_auth),
    "get_iam_group": Promise.method(get_iam_group),
    "get_iam_keys_lastused": Promise.method(get_iam_keys_lastused),
    "get_iam_mfa": Promise.method(get_iam_mfa),
    "get_iam_pass_policy": Promise.method(get_iam_pass_policy),
    "get_iam_user_console_pass": Promise.method(get_iam_user_console_pass),
    "get_iam_user": Promise.method(get_iam_user),
    "get_iamusers_without_mfa": Promise.method(get_iamusers_without_mfa),
    "get_kms_search": Promise.method(get_kms_search),
    "get_new_script_last_run": Promise.method(get_new_script_last_run),
    "get_old_ebs_optimize": Promise.method(get_old_ebs_optimize),
    "get_profilename": Promise.method(get_profilename),
    "get_qualys_agent": Promise.method(get_qualys_agent),
    "get_rds_backup": Promise.method(get_rds_backup),
    "get_rds_multi_az": Promise.method(get_rds_multi_az),
    "get_rds": Promise.method(get_rds),
    "get_redshift": Promise.method(get_redshift),
    "get_ri_graph": Promise.method(get_ri_graph),
    "get_routetable": Promise.method(get_routetable),
    "get_s3_limit_exceed": Promise.method(get_s3_limit_exceed),
    "get_s3_logging": Promise.method(get_s3_logging),
    "get_s3_open_public": Promise.method(get_s3_open_public),
    "get_s3": Promise.method(get_s3),
    "get_scheduled_events": Promise.method(get_scheduled_events),
    "get_script_last_run": Promise.method(get_script_last_run),
    "get_securitygroup": Promise.method(get_securitygroup),
    "get_snapshot": Promise.method(get_snapshot),
    "get_ssl_cert": Promise.method(get_ssl_cert),
    "get_subnet": Promise.method(get_subnet),
    "get_untagged_resource": Promise.method(get_untagged_resource),
    "get_unused_ebs": Promise.method(get_unused_ebs),
    "get_unused_ec2": Promise.method(get_unused_ec2),
    "get_unused_elasticip": Promise.method(get_unused_elasticip),
    "get_unused_elb": Promise.method(get_unused_elb),
    "get_unused_keypair": Promise.method(get_unused_keypair),
    "get_unused_script_last_run": Promise.method(get_unused_script_last_run),
    "get_unused_securitygroup": Promise.method(get_unused_securitygroup),
    "get_unused_snapshot": Promise.method(get_unused_snapshot),
    "get_user_login": Promise.method(get_user_login),
    "get_vol_snap_missing": Promise.method(get_vol_snap_missing),
    "get_vpc_flowlog": Promise.method(get_vpc_flowlog),
    "get_vpc_peering": Promise.method(get_vpc_peering),
    "get_vpc": Promise.method(get_vpc),
    "get_vpn_conditions": Promise.method(get_vpn_conditions),
    "get_tags_projectcode": Promise.method(get_tags_projectcode),
    "get_tags_owner": Promise.method(get_tags_owner),
    "get_tags_businessunit": Promise.method(get_tags_businessunit),
    "get_iam_unused_users": Promise.method(get_iam_unused_users),
    "get_open_securitygroup": Promise.method(get_open_securitygroup),
    "get_user_login": Promise.method(get_user_login)

};