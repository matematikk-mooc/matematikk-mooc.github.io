# How to maintain the Dockerfiles

The Dockerfiles are based on [Canvas installation instructions][CanvasInstall1]. Canvas depends on a lot of
different applications and libraries and the configuration of these. The installation link 
will tell you which version you will need of each of these. 

You might also want to check out the migration tool if you are going to copy a Canvas course from one
Canvas version to another.

We've expericence latency problems where the Canvas server suddenly seems to stop responding.
Redis has a page for troubleshooting such problems.

Canvas also has a google groups where you can find useful information. In that group, a user asked for better installation
instructions for Canvas, and got [this][CanvasInstall2].

To check the health of you installation, you can start by looking into /jobs for failed jobs.

If you need to reset docker completely, remove this file:
/Users/<...>/Library/Containers/com.docker.docker/Data/com.docker.driver.amd64-linux/Docker.qcow2

Look for error messages from the postgresql database in this direcdtory:
/var/log/postgresql


[CanvasInstall1]: https://github.com/instructure/canvas-lms/wiki/Quick-Start
[MigrationTool]:  https://github.com/instructure/QTIMigrationTool/wiki
[RedisLatency]:   https://redis.io/topics/latency
[GoogleGroup]:    https://groups.google.com/forum/#!forum/canvas-lms-users
[CanvasInstall2]: https://wiki.r00tedvw.com/index.php/Canvas_LMS/Installation/Ubuntu14_04