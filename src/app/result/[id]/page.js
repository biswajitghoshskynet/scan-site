'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Dotloader, Codeloader } from '@/components/Loader';
import InnerHTML from 'dangerously-set-html-content'
import { Tooltip } from 'react-tooltip'
import Link from 'next/link';


export default function Page({ params }) {
  var moment = require('moment');
  const [url, setUrl] = useState(params.id)



  const [hostingData, setHostingData] = useState(null)
  const [audienceData, setAudienceData] = useState(null)
  const [brokenLinks, setBrokenLinks] = useState(null)
  const [sitemapData, setSitemapData] = useState(null)
  const [robotsData, setRobotsData] = useState(null)
  const [globalranking, setGlobalranking] = useState(null)
  const [reviews, setReviews] = useState(null)
  const [risk, setRisk] = useState(null)
  const [speed, setSpeed] = useState(null)
  const [seo, setSeo] = useState(null)



  useEffect(() => {
    fetchHostingData()
    fetchAudienceData()
    fetchBrokenLinksData()
    fetchSitemapData()
    fetchRobotsData()
    fetchGlobalrankingData()
    fetchReviewsData()
    fetchRiskData()
    fetchSpeedData()
    // fetchSeoData()
  }, [])



  // hosting data
  const fetchHostingData = async () => {
    try {
      let result = await fetch(`${process.env.HOST}/api/v1/scan-web-host`, {
        method: 'POST',
        body: JSON.stringify({ url })
      })
      result = await result.json()
      setHostingData(result)
    } catch (error) {
      console.log(error);
    }

  }

  // audience data
  const fetchAudienceData = async () => {
    try {
      let result = await fetch(`${process.env.HOST}/api/v1/scan-engagement`, {
        method: 'POST',
        body: JSON.stringify({ url })
      })
      result = await result.json()
      setAudienceData(result)
    } catch (error) {
      console.log(error);
    }

  }

  // brokenlink data
  const fetchBrokenLinksData = async () => {
    try {
      let result = await fetch(`${process.env.HOST}/api/v1/scan-links`, {
        method: 'POST',
        body: JSON.stringify({ url })
      })
      result = await result.json()
      setBrokenLinks(result)
    } catch (error) {
      console.log(error);
    }

  }


  // sitemap data
  const fetchSitemapData = async () => {
    try {
      let result = await fetch(`${process.env.HOST}/api/v1/scan-sitemap`, {
        method: 'POST',
        body: JSON.stringify({ url })
      })
      result = await result.json()
      setSitemapData(result)

    } catch (error) {
      console.log(error);
    }

  }

  // robots data
  const fetchRobotsData = async () => {
    try {
      let result = await fetch(`${process.env.HOST}/api/v1/scan-robots`, {
        method: 'POST',
        body: JSON.stringify({ url })
      })
      result = await result.json()
      setRobotsData(result)
    } catch (error) {
      console.log(error);
    }

  }

  // rank data
  const fetchGlobalrankingData = async () => {
    try {
      let result = await fetch(`${process.env.HOST}/api/v1/scan-rank`, {
        method: 'POST',
        body: JSON.stringify({ url })
      })
      result = await result.json()
      setGlobalranking(result)
    } catch (error) {
      console.log(error);
    }

  }

  // review data
  const fetchReviewsData = async () => {
    try {
      let result = await fetch(`${process.env.HOST}/api/v1/scan-user-rating`, {
        method: 'POST',
        body: JSON.stringify({ url })
      })
      result = await result.json()
      setReviews(result)
    } catch (error) {
      console.log(error);
    }

  }

  // review data
  const fetchSeoData = async () => {
    try {
      let result = await fetch(`${process.env.HOST}/api/v1/seo-report`, {
        method: 'POST',
        body: JSON.stringify({ url })
      })
      result = await result.json()
      setSeo(result)
    } catch (error) {
      console.log(error);
    }
  }

  // Risk data
  const fetchRiskData = async () => {
    try {
      let result = await fetch(`${process.env.HOST}/api/v1/scan-risk-score`, {
        method: 'POST',
        body: JSON.stringify({ url })
      })
      result = await result.json()
      setRisk(result)
    } catch (error) {
      console.log(error);
    }
  }


  // Speed data
  const fetchSpeedData = async () => {
    try {
      let result = await fetch(`https://3wt3npqssj2lt337ulfvq2fr3e0yibjo.lambda-url.us-east-1.on.aws`, {
        method: 'POST',
        body: JSON.stringify({ url })
      })
      result = await result.json()
      setSpeed(result)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>


      <div className='d-flex'>
        <div className='leftCol d-none d-md-block'>
          <div className='leftContent'>
            <ul>
              <li><a href='#overview'>
                <i className="material-symbols-outlined">home</i>Overview</a>
              </li>
              <li><a href='#performance'><i className="material-symbols-outlined">swap_driving_apps_wheel</i>Performance</a></li>
              <li><a href='#audience'><i className="material-symbols-outlined">group</i>Audience</a></li>
              <li><a href='#brokenLinks'><i className="material-symbols-outlined">link_off</i>Broken Links</a></li>
              <li><a href='#risk'><i className="material-symbols-outlined">readiness_score</i>Risk Analysis</a></li>

            </ul>
          </div>
        </div>
        <div className='rightCol'>
          <div className='container-fluid'>
            <div className='mb-7' id='overview'>
              <div className='row gx-3 gx-xl-5'>
                {/* hostingData */}
                <div className='col-lg-6 col-xl-5 mb-4'>
                  <div className='d-flex gap-1 justify-content-between align-items-center mb-2'>
                    <div><h1 className='fw-medium mb-0'>{url}</h1></div>
                    <div>
                      <Link href='/' className="backIcon" title='Back to Home'>
                        <i className="material-symbols-outlined">
                          arrow_back
                        </i>
                      </Link>
                    </div>
                  </div>

                  {hostingData !== null ?
                    <div>
                      <h1 className='mb-2'>{hostingData.domain_name}</h1>
                      <div className='cardBox'>
                        <dl>
                          <div className='companyInfo d-flex'>
                            <dt>Country
                              <span
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="Specifies the geographical location where the website is officially registered or operates."
                                data-tooltip-place="top"
                              >
                                <i className="material-symbols-outlined tooltipIcon">
                                  help
                                </i>
                              </span>
                            </dt>
                            <dd>{hostingData.data.host.website_country}</dd>
                          </div>
                          <div className='companyInfo d-flex'>
                            <dt>Year Founded
                              <span
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="Indicates the year when the website was first established or launched."
                                data-tooltip-place="top"
                              >
                                <i className="material-symbols-outlined tooltipIcon">
                                  help
                                </i>
                              </span>
                            </dt>
                            <dd>{moment(hostingData.data.whois.creation_date).format("MM-DD-YYYY")}</dd>
                          </div>
                          <div className='companyInfo d-flex'>
                            <dt>SSL Certificate
                              <span
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="A security protocol that encrypts data exchanged between a user's browser and the website to ensure secure communication."
                                data-tooltip-place="top"
                              >
                                <i className="material-symbols-outlined tooltipIcon">
                                  help
                                </i>
                              </span>
                            </dt>
                            <dd>{hostingData.data.ssl.issued_by}</dd>
                          </div>
                          <div className='companyInfo d-flex'>
                            <dt>DNS Provider
                              <span
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="The service responsible for managing the website's domain name system (DNS) records and directing traffic to the correct server."
                                data-tooltip-place="top"
                              >
                                <i className="material-symbols-outlined tooltipIcon">
                                  help
                                </i>
                              </span>
                            </dt>
                            <dd>{hostingData.data.host.dns_provider}</dd>
                          </div>
                          <div className='companyInfo d-flex'>
                            <dt>Web Server
                              <span
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="The software or hardware responsible for hosting and serving website content to users."
                                data-tooltip-place="top"
                              >
                                <i className="material-symbols-outlined tooltipIcon">
                                  help
                                </i>
                              </span>
                            </dt>
                            <dd>{hostingData.data.host.web_server}</dd>
                          </div>
                          <div className='companyInfo d-flex'>
                            <dt>Blacklist Status
                              <span
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="Checks whether the website is flagged on any security blacklists due to potential spam, malware, or suspicious activities."
                                data-tooltip-place="top"
                              >
                                <i className="material-symbols-outlined tooltipIcon">
                                  help
                                </i>
                              </span>
                            </dt>
                            <dd>{hostingData.data.host.black_list_status.is_blacklisted === true ? 'Blacklisted' : hostingData.data.host.black_list_status.description}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                    : <div className='svgLoader'>{Codeloader()}</div>
                  }
                </div>


                <div className='col-lg-6 col-xl-7'>
                  <div className='mb-3'>
                    <div className='row justify-content-center'>
                      <div className='col-lg-9'>
                        <div className='websiteImg position-relative overflow-hidden'>
                          <div className='webImg z-1'>
                            {speed !== null ?
                              speed.data?.success === true ?
                                <InnerHTML html={speed.data.screenshot_tag} />
                                : null
                              : <div className='imgLoader'>{Dotloader()}</div>}
                            {/* <Image style={{ width: '100%', height: 'auto' }}
                              src="/img/website.jpg"
                              width={700}
                              height={300}
                              alt="laptop"
                            /> */}
                          </div>
                          <div className='laptop position-relative z-2'>
                            <Image style={{ width: '100%', height: 'auto' }}
                              src="/img/laptop.png"
                              width={700}
                              height={300}
                              alt="laptop"
                            />
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                  <div className='d-flex justify-content-between gap-3 ratingInfo'>
                    <div>
                      <p className='mb-05'><small><i className="material-symbols-outlined smallIcon">editor_choice</i> Global Rank</small> <span
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Represents the website's ranking based on traffic and engagement, with lower values indicating higher popularity."
                        data-tooltip-place="top"
                      >
                        <i className="material-symbols-outlined tooltipIcon">
                          help
                        </i>
                      </span></p>
                      {globalranking !== null ?
                        <h2 className='mb-05 fw-medium'>#{globalranking?.data?.global_rank}</h2>
                        : Dotloader()
                      }
                    </div>
                    <div>
                      <p className='mb-05'><small><i className="material-symbols-outlined smallIcon">link_off</i> Broken Links</small>
                        <span
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="Hyperlinks on a website that no longer work due to changes in the URL, deleted pages, or server issues, leading to errors when accessed."
                          data-tooltip-place="top"
                        >
                          <i className="material-symbols-outlined tooltipIcon">
                            help
                          </i>
                        </span>
                      </p>

                      {brokenLinks?.success === true ?
                        brokenLinks.data?.urls?.length > 0 ?
                          <h2 className='mb-05 fw-medium text-danger'>{brokenLinks.data.urls.length} found</h2>
                          :
                          <h2 className='mb-05 fw-medium text-success'>PASSED</h2>
                        :
                        Dotloader()
                      }

                    </div>
                    <div>
                      <p className='mb-05'><small><i className="material-symbols-outlined smallIcon">star</i> User Reviews</small>
                        <span
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="Shows the count of available user reviews for the website."
                          data-tooltip-place="top"
                        >
                          <i className="material-symbols-outlined tooltipIcon">
                            help
                          </i>
                        </span>
                      </p>
                      {reviews !== null ?
                        <div className='d-flex gap-2 align-items-center'>
                          <h2 className='mb-05 fw-medium text-warning'>{reviews.data.rating}</h2>
                          <h5 className='mb-0'>({reviews.data.review_count})</h5>
                        </div>
                        : Dotloader()
                      }
                    </div>

                  </div>
                </div>
              </div>
            </div>






            <div className='d-flex gap-5 ratingInfo mb-10'>
              <div>
                <p className='mb-05'><small><i className="material-symbols-outlined smallIcon">account_tree</i> Sitemap (Url | Image)</small>
                  <span
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="A sitemap is a file that lists all the pages of a website to help search engines easily crawl and index its content. Result indicates the number of image and URL entries within the sitemap."
                    data-tooltip-place="top"
                  >
                    <i className="material-symbols-outlined tooltipIcon">
                      help
                    </i>
                  </span>
                </p>
                {sitemapData !== null ?
                  <h2 className='mb-05 fw-medium'>#{sitemapData.data.url_count} | #{sitemapData.data.image_count}</h2>
                  : Dotloader()
                }
              </div>
              <div>
                <p className='mb-05'><small><i className="material-symbols-outlined smallIcon">sensors</i> Robots Scan</small>
                  <span
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="It is used to give instructions to search engine crawlers about which pages or sections of a website should or should not be scanned and indexed. A robots.txt file confirms whether search engines can access and crawl the website."
                    data-tooltip-place="top"
                  >
                    <i className="material-symbols-outlined tooltipIcon">
                      help
                    </i>
                  </span>
                </p>
                {robotsData !== null ?
                  robotsData.success === true ? <h2 className='mb-05 fw-medium text-success'>PASSED</h2> : <h2 className='mb-05 fw-medium text-danger'>FAILED</h2>
                  : Dotloader()
                }
              </div>
            </div>

            {/* Speed */}
            <div id='performance' className='mb-10'>
              <h2 className='mb-3'><span className="material-symbols-outlined">swap_driving_apps_wheel</span> Site Performance Metrics</h2>
              {speed !== null ?
                speed.data?.success === true ?
                  <>
                    <div className='d-flex flex-wrap flex-lg-nowrap justify-content-between gap-3 mb-5'>
                      <div className='whiteBox flex-fill'>
                        <p className="mb-05"><small>Performance Score</small>
                          <span
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Performance Score is a metric that measures the overall speed and responsiveness of a website, reflecting how well it performs in terms of user experience."
                            data-tooltip-place="top"
                          >
                            <i className="material-symbols-outlined tooltipIcon">
                              help
                            </i>
                          </span>
                        </p>
                        <h4 className="mb-05 fw-medium">{speed.data.performance_score}</h4>
                      </div>
                      <div className='whiteBox flex-fill'>
                        <p className="mb-05"><small>Cumulative Layout Shift (CLS)</small>
                          <span
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Cumulative Layout Shift (CLS) measures the visual stability of a website, quantifying how much the layout shifts unexpectedly during page loading."
                            data-tooltip-place="top"
                          >
                            <i className="material-symbols-outlined tooltipIcon">
                              help
                            </i>
                          </span>
                        </p>
                        <h4 className="mb-05 fw-medium">{speed.data.cumulative_layout_shift}</h4>
                      </div>

                      <div className='whiteBox flex-fill'>
                        <p className="mb-05"><small>First Contentful Paint (FCP)</small>
                          <span
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="First Contentful Paint (FCP) tracks the time it takes for the first visible content (text, image, etc.) to appear on a webpage after the user navigates to it."
                            data-tooltip-place="top"
                          >
                            <i className="material-symbols-outlined tooltipIcon">
                              help
                            </i>
                          </span>
                        </p>
                        <h4 className="mb-05 fw-medium">{speed.data.first_contentful_paint}</h4>
                      </div>
                      <div className='whiteBox flex-fill'>
                        <p className="mb-05"><small>Largest Contentful Paint (LCP)</small>
                          <span
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Largest Contentful Paint (LCP) measures the time it takes for the largest visible element (like an image or text block) to fully load, indicating how fast the main content is rendered."
                            data-tooltip-place="top"
                          >
                            <i className="material-symbols-outlined tooltipIcon">
                              help
                            </i>
                          </span>
                        </p>
                        <h4 className="mb-05 fw-medium">
                          {speed.data.largets_contentful_paint}
                        </h4>
                      </div>
                    </div>
                  </>


                  : null
                : Dotloader()}
            </div>



            {/* Audience */}
            <div id='audience' className='mb-10'>
              <div className='mb-4 d-flex gap-2'>
                <div>
                  <h2 className='mb-0'><span className="material-symbols-outlined">group</span></h2>
                </div>
                <div className='flex-fill'>
                  <h2>Traffic & Engagement Analysis</h2>
                  <div className='row'>
                    <div className='col-md-9 col-lg-9 col-xl-7'>
                      <p className='small mb-0'>Provides insights into visitor behavior, including the number of users, page views, bounce rates, and session durations, helping assess audience interaction.</p>
                    </div>
                  </div>

                </div>
              </div>

              {audienceData !== null ?
                audienceData.data.error ? <p>{audienceData.data.error}</p>
                  :
                  <>
                    <div className='d-flex flex-wrap flex-lg-nowrapjustify-content-between gap-3 mb-5'>
                      <div className='whiteBox flex-fill'>
                        <p className="mb-05"><small>Alexa Rank</small></p>
                        <h4 className="mb-05 fw-medium">{audienceData.data.alexa_rank}</h4>
                      </div>
                      <div className='whiteBox flex-fill'>
                        <p className="mb-05"><small>Bounce Rate</small></p>
                        <h4 className="mb-05 fw-medium">{audienceData.data.bounce_rate_percentage}%</h4>
                      </div>
                      <div className='whiteBox flex-fill'>
                        <p className="mb-05"><small>Pages per Visit</small></p>
                        <h4 className="mb-05 fw-medium">{audienceData.data.daily_pageviews_per_visitor}</h4>
                      </div>
                      <div className='whiteBox flex-fill'>
                        <p className="mb-05"><small>Avg Visit Duration</small></p>
                        <h4 className="mb-05 fw-medium">{audienceData.data.daily_time_on_site}</h4>
                      </div>
                      <div className='whiteBox flex-fill'>
                        <p className="mb-05"><small>Search Traffic</small></p>
                        <h4 className="mb-05 fw-medium">{audienceData.data.search_traffic_percentage}%</h4>
                      </div>
                    </div>

                    <div className='row gx-5'>
                      <div className='col-md-6 col-lg-7 col-xl-8 mb-3'>
                        <h4 className='mb-2'>Compare to</h4>
                        <div className=''>

                          {audienceData.data.similar_sites?.map((similar, similarIndex) => (
                            <div key={similarIndex} className='mb-3'>
                              <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar fw-bold" style={{ width: `${similar.search_traffic_percentage}%` }}>{similar.search_traffic_percentage}%</div>
                              </div>
                              <small>{similar.website} </small>

                            </div>
                          ))}

                        </div>
                      </div>
                      <div className='col-md-6 col-lg-5 col-xl-4'>
                        <h4 className='mb-2'>Web Traffic by Country</h4>
                        <div className='whiteBox primaryBox'>
                          <ul>
                            {audienceData.data.visitors_by_country?.map((country, countryIndex) => (
                              <li key={countryIndex} className='mb-1'><span className="material-symbols-outlined">
                                flag_circle
                              </span> {country.country} <span className='fw-bold'>{country.site_traffic_percentage}%</span></li>
                            ))}
                          </ul>

                        </div>
                      </div>
                    </div>
                  </>
                : null
              }
            </div>



            {/* Broken Links */}
            <div id='brokenLinks' className='mb-10'>
              <div className='mb-4 d-flex gap-2'>
                <div>
                  <h2 className='mb-0'><span className="material-symbols-outlined">link_off</span></h2>
                </div>
                <div className='flex-fill'>
                  <h2>Broken Links</h2>
                  <div className='row'>
                    <div className='col-md-9 col-lg-9 col-xl-9'>
                      <p className='small mb-0'>Displays inaccessible or non-functional links found on the website.</p>
                    </div>
                  </div>

                </div>
              </div>

              {brokenLinks !== null ?
                <ul className='brokenLinkList'>

                  {brokenLinks?.data?.urls?.length > 0 ? brokenLinks.data.urls.map((item, index) => (
                    <li key={index}><span className='brokenUrl'>{item.url}</span> <span className='statusCode text-danger fw-medium'>{item.status_code}</span></li>
                  )) : '0 Broken link found'}
                </ul>
                : null}
            </div>

            {/* Risk */}
            <div id='risk'>
              <h2 className='mb-4'><span className="material-symbols-outlined">readiness_score</span> Risk Analysis</h2>
              {risk !== null ?
                risk.success === true ?

                  <>
                    <div className='d-flex flex-wrap flex-lg-nowrap justify-content-between gap-3 mb-5'>
                      <div className='whiteBox flex-fill'>
                        <p className="mb-05"><small>Overall Risk Status</small>
                          <span
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="The overall assessment of potential threats and vulnerabilities associated with a system or asset, indicating the level of risk exposure."
                            data-tooltip-place="top"
                          >
                            <i className="material-symbols-outlined tooltipIcon">
                              help
                            </i>
                          </span>
                        </p>
                        <h4 className="mb-05 fw-medium">{risk.data.unsafe === false ? <span className='text-success'>Safe</span> : <span className='text-danger'>Unsafe</span>}</h4>
                      </div>
                      <div className='whiteBox flex-fill'>
                        <p className="mb-05"><small>Risk Score</small>
                          <span
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="A numerical value assigned to measure the severity and likelihood of a risk occurring, often used to prioritize risk mitigation efforts."
                            data-tooltip-place="top"
                          >
                            <i className="material-symbols-outlined tooltipIcon">
                              help
                            </i>
                          </span>
                        </p>
                        <h4 className="mb-05 fw-medium">{risk.data.risk_score}</h4>
                      </div>
                      <div className='whiteBox flex-fill'>
                        <p className="mb-05"><small>Malware Detection</small>
                          <span
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="The process of identifying and analyzing harmful software, such as viruses, worms, and trojans, that can compromise the security of a system."
                            data-tooltip-place="top"
                          >
                            <i className="material-symbols-outlined tooltipIcon">
                              help
                            </i>
                          </span>
                        </p>
                        <h4 className="mb-05 fw-medium">{risk.data.malware === false ? <span className='text-success'>No malware found</span> : <span className='text-danger'>Malware found</span>}</h4>
                      </div>
                      <div className='whiteBox flex-fill'>
                        <p className="mb-05"><small>Domain Rank</small>
                          <span
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="A metric used to assess the authority and trustworthiness of a website based on its backlinks, content quality, and other SEO factors."
                            data-tooltip-place="top"
                          >
                            <i className="material-symbols-outlined tooltipIcon">
                              help
                            </i>
                          </span>
                        </p>
                        <h4 className="mb-05 fw-medium">#{risk.data.domain_rank}</h4>
                      </div>
                      <div className='whiteBox flex-fill'>
                        <p className="mb-05"><small>IP Address</small>
                          <span
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="A unique numerical label assigned to devices connected to a network, enabling identification and communication between devices over the internet."
                            data-tooltip-place="top"
                          >
                            <i className="material-symbols-outlined tooltipIcon">
                              help
                            </i>
                          </span>
                        </p>
                        <h4 className="mb-05 fw-medium">{risk.data.ip_address}</h4>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-md-6 mb-3'>
                        <div className='whiteBox'>
                          <table className='table'>
                            <tbody>
                              <tr>
                                <td>DMARC Record
                                  <span
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content="A DNS record that helps protect email domains from unauthorized use by specifying policies for email authentication and reporting."
                                    data-tooltip-place="top"
                                  >
                                    <i className="material-symbols-outlined tooltipIcon">
                                      help
                                    </i>
                                  </span>
                                </td>
                                <td>{risk.data.dmarc_record === true ? <strong>True</strong> : <strong>False</strong>}</td>
                              </tr>
                              <tr>
                                <td>DNS Configuration
                                  <span
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content="Indicates whether the content of a website or domain is hosted on a server and accessible for viewing, which can affect site reputation and security."
                                    data-tooltip-place="top"
                                  >
                                    <i className="material-symbols-outlined tooltipIcon">
                                      help
                                    </i>
                                  </span>
                                </td>
                                <td>{risk.data.dns_valid === true ? <strong>True</strong> : <strong>False</strong>}</td>
                              </tr>
                              <tr>
                                <td>Hosted Content Status
                                  <span
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content="Indicates whether the content of a website or domain is hosted on a server and accessible for viewing, which can affect site reputation and security."
                                    data-tooltip-place="top"
                                  >
                                    <i className="material-symbols-outlined tooltipIcon">
                                      help
                                    </i>
                                  </span>
                                </td>
                                <td>{risk.data.hosted_content === true ? <strong>True</strong> : <strong>False</strong>}</td>
                              </tr>
                              <tr>
                                <td>Domain Parking
                                  <span
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content="The practice of registering a domain name without actively using it for a website, often displaying a placeholder page."
                                    data-tooltip-place="top"
                                  >
                                    <i className="material-symbols-outlined tooltipIcon">
                                      help
                                    </i>
                                  </span>
                                </td>
                                <td>{risk.data.parking === true ? <strong>True</strong> : <strong>False</strong>}</td>
                              </tr>
                              <tr>
                                <td>Phishing Detection
                                  <span
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content="The identification of fraudulent attempts to acquire sensitive information by masquerading as a legitimate entity, typically via email or websites."
                                    data-tooltip-place="top"
                                  >
                                    <i className="material-symbols-outlined tooltipIcon">
                                      help
                                    </i>
                                  </span>
                                </td>
                                <td>{risk.data.phishing === true ? <strong>True</strong> : <strong>False</strong>}</td>
                              </tr>
                              <tr>
                                <td>Redirect Status
                                  <span
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content="The HTTP response code indicating how a URL is redirected to another address, affecting page load times and SEO performance."
                                    data-tooltip-place="top"
                                  >
                                    <i className="material-symbols-outlined tooltipIcon">
                                      help
                                    </i>
                                  </span>
                                </td>
                                <td>{risk.data.redirected === true ? <strong>True</strong> : <strong>False</strong>}</td>
                              </tr>

                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='whiteBox'>
                          <table className='table'>
                            <tbody>

                              <tr>
                                <td>Risky TLD Indicator
                                  <span
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content="A warning that identifies potentially unsafe or unreliable top-level domains (TLDs) based on past abuse or association with malicious activities."
                                    data-tooltip-place="top"
                                  >
                                    <i className="material-symbols-outlined tooltipIcon">
                                      help
                                    </i>
                                  </span>
                                </td>
                                <td>{risk.data.risky_tld === true ? <strong>True</strong> : <strong>False</strong>}</td>
                              </tr>
                              <tr>
                                <td>Short Link Redirects
                                  <span
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content="The process of shortening a URL into a smaller form, often used for tracking purposes, which can sometimes be a vector for malware or phishing."
                                    data-tooltip-place="top"
                                  >
                                    <i className="material-symbols-outlined tooltipIcon">
                                      help
                                    </i>
                                  </span>
                                </td>
                                <td>{risk.data.short_link_redirect === true ? <strong>True</strong> : <strong>False</strong>}</td>
                              </tr>
                              <tr>
                                <td>Spam Activity Check
                                  <span
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content="The monitoring of a domain or email for suspicious patterns typically associated with sending unsolicited bulk messages or spam."
                                    data-tooltip-place="top"
                                  >
                                    <i className="material-symbols-outlined tooltipIcon">
                                      help
                                    </i>
                                  </span>
                                </td>
                                <td>{risk.data.spamming === true ? <strong>True</strong> : <strong>False</strong>}</td>
                              </tr>
                              <tr>
                                <td>SPF Record Validation
                                  <span
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content="The process of verifying that an email sender's IP address matches the domain's SPF (Sender Policy Framework) record, helping to prevent email spoofing."
                                    data-tooltip-place="top"
                                  >
                                    <i className="material-symbols-outlined tooltipIcon">
                                      help
                                    </i>
                                  </span>
                                </td>
                                <td>{risk.data.spf_record === true ? <strong>True</strong> : <strong>False</strong>}</td>
                              </tr>
                              <tr>
                                <td>Suspicious Activity
                                  <span
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content="Any unusual or potentially harmful actions, such as unauthorized access or abnormal behavior, that may indicate a security threat."
                                    data-tooltip-place="top"
                                  >
                                    <i className="material-symbols-outlined tooltipIcon">
                                      help
                                    </i>
                                  </span>
                                </td>
                                <td>{risk.data.suspicious === true ? <strong>True</strong> : <strong>False</strong>}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </>
                  : null
                : null
              }
            </div>


          </div>
        </div>
      </div>

      <Tooltip
        id="my-tooltip"
        style={{
          backgroundColor: "rgb(9 37 64)",
          color: "#fff", fontSize: '10px',
          letterSpacing: '0.03em',
          maxWidth: '220px',
          lineHeight: '1.4em',
          borderRadius: '6px',
          zIndex: '9999'
        }} />
    </>
  )
}
