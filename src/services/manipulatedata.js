'use strict';

var Promise = require('bluebird');
var moment = require('moment');
var _ = require('underscore');
var db = require('../models');


function get_access_key_age() {
    return Promise.all([db.access_key_age.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'access_key_age'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })


}

function get_agent_status() {
    return Promise.all([db.agent_status.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'agent_status'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_al_agent() {
    return db.al_agent.findAll().then(function(res) {

        return res;
    });
}

function get_ami_aging() {
    return Promise.all([db.ami_aging.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'ami_aging'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_ami_audit() {
    return Promise.all([db.ami_audit.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'ami_audit'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_ami_cleanup() {
    return Promise.all([db.ami_cleanup.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'ami_cleanup'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_ami_details() {
    return Promise.all([db.ami_details.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'ami_details'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_ami() {
    return Promise.all([db.ami.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'ami'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_ami_public() {
    return Promise.all([db.ami_public.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'ami_public'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_backup_script() {
    return Promise.all([db.backup_script.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'backup_script'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_cis_audits() {
    return Promise.all([db.cis_audits.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'cis_audits'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_bastion_hosts() {
    return Promise.all([db.bastion_hosts.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'bastion_hosts'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_cloudtrail_status() {
    return Promise.all([db.cloudtrail_status.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'cloudtrail_status'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_cmdlogin() {
    return db.cmdlogin.findAll().then(function(res) {
        return res;
    });
}

function get_db_encryption() {
    return Promise.all([db.db_encryption.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'db_encryption'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_ds_agent() {
    return db.ds_agent.findAll().then(function(res) {
        return res;
    });
}

function get_ebs_terminate_protect() {
    return db.ebs_terminate_protect.findAll().then(function(res) {
        return res;
    });
}

function get_ebs() {
    return Promise.all([db.ebs.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'ebs'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_ec2_ebs_optimize() {
    return Promise.all([db.ec2_ebs_optimize.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'ec2_ebs_optimize'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_ec2_ri() {
    return Promise.all([db.ec2_ri.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'ec2_ri'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_ec2_terminate_protect() {
    return Promise.all([db.ec2_terminate_protect.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'ec2_terminate_protect'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_ec2() {
    return Promise.all([db.ec2.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'ec2'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_elasticip() {
    return db.elasticip.findAll().then(function(res) {
        return res;
    });
}

function get_elb_access_log() {
    return Promise.all([db.elb_access_log.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'elb_access_log'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_elb_with_cipher() {
    return Promise.all([db.elb_with_cipher.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'elb_with_cipher'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_elb() {
    return Promise.all([db.elb.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'elb'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_elk() {
    return Promise.all([db.elk.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'elk'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_execcmd() {
    return db.execcmd.findAll().then(function(res) {
        return res;
    });
}

function get_graph_implement() {
    return db.graph_implement.findAll().then(function(res) {
        return res;
    });
}

function get_iam_acc_key() {
    return Promise.all([db.iam_acc_key.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'iam_acc_key'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_iam_auth() {
    return Promise.all([db.iam_auth.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'iam_auth'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_iam_group() {
    return Promise.all([db.iam_group.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'iam_group'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_iam_keys_lastused() {
    return Promise.all([db.connection.query(`select  UserName,AccessKeyID,DATEDIFF(CURDATE(),LastUsed) AS 'Key last used - more than 30 Days',ServiceName,Region,AccountName 
             from iam_keys_lastused where DATEDIFF(CURDATE(),LastUsed)>=30`)
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res) {
            return {
                data: res
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_iam_mfa() {
    return Promise.all([db.iam_mfa.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'iam_mfa'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        });
}

function get_iam_pass_policy() {
    return Promise.all([db.iam_pass_policy.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'iam_pass_policy'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        });
}

function get_iam_user_console_pass() {
    return Promise.all([db.iam_user_console_pass.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'iam_user_console_pass'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        });
}

function get_iam_user() {
    return Promise.all([db.iam_user.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'iam_user'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_iamusers_without_mfa() {
    return Promise.all([db.iamusers_without_mfa.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'iamusers_without_mfa'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_kms_search() {
    return Promise.all([db.kms_search.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'kms_search'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_new_script_last_run() {
    return db.new_script_last_run.findAll().then(function(res) {
        return res;
    });
}

function get_old_ebs_optimize() {
    return Promise.all([db.old_ebs_optimize.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'old_ebs_optimize'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_profilename() {
    return Promise.all([db.profilename.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'profilename'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_qualys_agent() {
    return db.qualys_agent.findAll().then(function(res) {
        return res;
    });
}

function get_rds_backup() {
    return Promise.all([db.rds_backup.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'rds_backup'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_rds_multi_az() {
    return Promise.all([db.rds_multi_az.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'rds_multi_az'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_rds() {
    return Promise.all([db.rds.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'rds'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_redshift() {
    return Promise.all([db.redshift.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'redshift'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_ri_graph() {
    return db.ri_graph.findAll().then(function(res) {
        return res;
    });
}

function get_routetable() {
    return Promise.all([db.routetable.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'routetable'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_s3_limit_exceed() {
    return Promise.all([db.s3_limit_exceed.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 's3_limit_exceed'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_s3_logging() {
    return Promise.all([db.s3_logging.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 's3_logging'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_s3_open_public() {
    return db.s3_open_public.findAll().then(function(res) {
        return res;
    });
}

function get_s3() {
    return Promise.all([db.s3.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 's3'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_scheduled_events() {
    return Promise.all([db.scheduled_events.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'scheduled_events'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_script_last_run() {
    return db.script_last_run.findAll().then(function(res) {
        return res;
    });
}

function get_securitygroup() {
    return Promise.all([db.securitygroup.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'securitygroup'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_snapshot() {
    return Promise.all([db.snapshot.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'snapshot'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_ssl_cert() {
    return db.ssl_cert.findAll().then(function(res) {
        return res;
    });
}

function get_subnet() {
    return Promise.all([db.subnet.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'subnet'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_untagged_resource() {
    return Promise.all([db.untagged_resource.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'untagged_resource'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_unused_ebs() {
    return Promise.all([db.unused_ebs.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'unused_ebs'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_unused_ec2() {
    return Promise.all([db.unused_ec2.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'unused_ec2'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_unused_elasticip() {
    return Promise.all([db.unused_elasticip.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'unused_elasticip'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_unused_elb() {
    return Promise.all([db.unused_elb.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'unused_elb'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_unused_keypair() {
    return Promise.all([db.unused_keypair.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'unused_keypair'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_unused_script_last_run() {
    return db.unused_script_last_run.findAll().then(function(res) {
        return res;
    });
}

function get_unused_securitygroup() {
    return Promise.all([db.unused_securitygroup.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'unused_securitygroup'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_unused_snapshot() {
    return Promise.all([db.unused_snapshot.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'unused_snapshot'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_user_login(name, pword) {
    return db.user_login.find({
        where: {
            'Username': name,
            'Password': pword
        }
    }).then(function(res) {

        if (res == null) {
            return res;
        } else {
            return res;
        }

    });
}

function get_vol_snap_missing() {
    return Promise.all([db.vol_snap_missing.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'vol_snap_missing'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_vpc_flowlog() {
    return Promise.all([db.vpc_flowlog.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'vpc_flowlog'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_vpc_peering() {
    return Promise.all([db.vpc_peering.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'vpc_peering'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_vpc() {
    return Promise.all([db.vpc.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'vpc'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_vpn_conditions() {
    return Promise.all([db.vpn_conditions.findAll().then(function(res) {
                return res;
            }),
            db.connection.query("SELECT update_time FROM   information_schema.tables WHERE  TABLE_SCHEMA = 'aws_assets' AND TABLE_NAME = 'vpn_conditions'")
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res, update_time) {
            return {
                data: res,
                update_time
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })
}

function get_tags_projectcode() {
    return Promise.all([db.connection.query(`(select ProjectCode from ec2 where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev')) 
    union (select ProjectCode from rds where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev') ) 
    union (select ProjectCode from ebs where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev')) 
    union (select ProjectCode from vpc where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev')) 
    union (select ProjectCode from s3 where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev') ) 
    union (select ProjectCode from securitygroup where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev'))`)
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res) {
            return {
                data: res
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })

}


function get_tags_owner() {
    return Promise.all([db.connection.query(`(select Owner from ec2 where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev'))
union (select Owner from rds  where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev')) 
union (select Owner from ebs  where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev'))
union (select Owner from vpc  where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev')) 
union  (select Owner from s3 where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev'))  
union (select Owner from securitygroup where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev'))`)
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res) {
            return {
                data: res
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })

}

function get_tags_businessunit() {
    return Promise.all([db.connection.query(`(select BusinessUnit from ec2 where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev')) 
    union (select BusinessUnit from rds where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev') ) 
    union (select BusinessUnit from ebs where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev')) 
    union (select BusinessUnit from vpc where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev')) 
    union ( select BusinessUnit from s3 where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev'))
     union (select BusinessUnit from securitygroup where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev'))`)
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res) {
            return {
                data: res
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })

}

function get_iam_unused_users() {
    return Promise.all([db.connection.query(`select  UserName,CreateDate,DATEDIFF(CURDATE(),PasswordLastUsed)AS 'Last Sign-In (> 60 Days)',AccountName
                             from iam_user where DATEDIFF(CURDATE(),PasswordLastUsed)>=60`)
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res) {
            return {
                data: res
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })

}

function get_open_securitygroup() {
    return Promise.all([db.connection.query(`select GroupName,VpcId,Outbound,Inbound,GroupId,AccountName,RegionName from securitygroup 
                                where  Inbound like '%0.0.0.0/0%'`)
            .then(function(res) {
                return res;
            })
        ])
        .spread(function(res) {
            return {
                data: res
            };
        })
        .catch(function(error) {
            console.log(error.message);
        })

}

function get_graph_implement1(a, b) {

    return db.graph_implement.findAll({
        where: {
            'AccountName': a,
            'RegionName': b
        }
    });
}


module.exports = {
    "get_access_key_age": Promise.method(get_access_key_age),
    "get_agent_status": Promise.method(get_agent_status),
    "get_al_agent": Promise.method(get_al_agent),
    "get_ami_aging": Promise.method(get_ami_aging),
    "get_ami_audit": Promise.method(get_ami_audit),
    "get_ami_cleanup": Promise.method(get_ami_cleanup),
    "get_ami_public": Promise.method(get_ami_public),
    "get_ami_details": Promise.method(get_ami_details),
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